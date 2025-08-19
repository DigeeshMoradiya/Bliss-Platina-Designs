import { useState, useEffect, useRef } from 'react';
import ProductItem from './ProductItem';
import Loader from '../common/Loader';
import { getProduct } from '@/lib/api/product/product';

const ProductGrid = ({ viewMode, setLoading, loading, search }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isFetching, setIsFetching] = useState(false); // Prevent multi-call for same page
    const loaderRef = useRef(null);

    const loadProducts = async (pageNumber) => {
        if (isFetching) return; // Block if already fetching
        setIsFetching(true);
        setLoading(true);


        const result = await getProduct(pageNumber, 9, search ? search : ""); // API call
        if (result?.success && result.data?.data?.length > 0) {
            setProducts(prev => {
                const newProducts = result.data.data.filter(
                    newProd => !prev.some(existingProd => existingProd.id === newProd.id)
                );
                return [...prev, ...newProducts];
            });

            // If fewer than 6 items, no more data
            if (result.data.data.length < 6) {
                setHasMore(false);
            }
        } else {
            setHasMore(false);
            setProducts([]);
        }

        setLoading(false);
        setIsFetching(false);
    };

    // Initial load (page 1)
    useEffect(() => {
        loadProducts(1);
    }, [search]);

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
            {products?.length === 0 ? <div className='text-center'> <p>No results found for {search}</p> </div> :
                <>
                    <div className="product-grid-container">
                        <div className={`shop-product-wrap ${viewMode}-view row mbn-30`}>
                            {products.map((product) => (
                                <div key={product.id} className="col-md-4 col-sm-6">
                                    <ProductItem product={product} viewMode={viewMode} />
                                </div>
                            ))}
                        </div>

                        {/* Loader & Scroll Trigger */}
                        <div ref={loaderRef} className="load-more-trigger">
                            {loading && <Loader />}
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default ProductGrid;
