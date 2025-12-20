import { useState, useEffect, useRef } from 'react';
import ProductItem from './ProductItem';
import Loader from '../common/Loader';
import { getProduct } from '@/lib/api/product/product';

const ProductGrid = ({ viewMode, setLoading, loading, search }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isFetching, setIsFetching] = useState(false); // Prevent multi-call for same page
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [isSearching, setIsSearching] = useState(false); // Track debounce period
    const loaderRef = useRef(null);

    // Debounce search input
    useEffect(() => {
        // If search value changed, show searching state
        if (search !== debouncedSearch) {
            setIsSearching(true);
        }

        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setIsSearching(false);
        }, 500); // 500ms delay

        return () => clearTimeout(timer);
    }, [search]);

    const loadProducts = async (pageNumber) => {
        if (isFetching) return; // Block if already fetching
        setIsFetching(true);

        // Only show full loading for page 1 (initial load or new search)
        if (pageNumber === 1) {
            setLoading(true);
        }


        const result = await getProduct(pageNumber, 9, debouncedSearch ? debouncedSearch : ""); // API call
        if (result?.success && result.data?.data?.length > 0) {
            setProducts(prev => {
                // If it's page 1, replace all products (for new search)
                if (pageNumber === 1) {
                    return result.data.data;
                }
                // Otherwise, append new products (for pagination)
                const newProducts = result.data.data.filter(
                    newProd => !prev.some(existingProd => existingProd.id === newProd.id)
                );
                return [...prev, ...newProducts];
            });

            // If fewer than 9 items, no more data
            if (result.data.data.length < 9) {
                setHasMore(false);
            }
        } else {
            setHasMore(false);
            if (pageNumber === 1) {
                setProducts([]);
            }
        }

        setLoading(false);
        setIsFetching(false);
    };

    // Initial load (page 1) - Reset state when debounced search changes
    useEffect(() => {
        setProducts([]);
        setPage(1);
        setHasMore(true);
        loadProducts(1);
    }, [debouncedSearch]);


    // Intersection Observer for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading && !isFetching) {
                    const nextPage = page + 1;
                    setPage(nextPage);
                    loadProducts(nextPage);
                }
            },
            { threshold: 0.1 }
        );

        const loaderEl = loaderRef.current;
        if (loaderEl) observer.observe(loaderEl);

        return () => {
            if (loaderEl) observer.unobserve(loaderEl);
        };
    }, [hasMore, loading, isFetching, page, search]);

    return (
        <>
            {/* Show loader when initially loading or searching */}
            {loading || isSearching ? (
                <div className='load-more-trigger'>
                    <Loader />
                </div>
            ) : products?.length === 0 ? (
                <div className='text-center'>
                    <p>No results found for {search}</p>
                </div>
            ) : (
                <>
                    <div className="product-grid-container">
                        <div className={`shop-product-wrap ${viewMode}-view row mbn-30`}>
                            {products.map((product) => (
                                <div key={product.id} className="col-md-4 col-sm-6">
                                    <ProductItem product={product} viewMode={viewMode} />
                                </div>
                            ))}
                        </div>

                        {/* Loader & Scroll Trigger for pagination */}
                        <div ref={loaderRef} className="load-more-trigger">
                            {isFetching && <Loader />}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductGrid;
