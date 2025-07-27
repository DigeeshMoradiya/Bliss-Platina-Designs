import { useState, useEffect, useRef } from 'react';
import ProductItem from './ProductItem';
import Loader from '../common/Loader';

const ProductGrid = ({ products: initialProducts, viewMode,setLoading ,loading}) => {
    const [products, setProducts] = useState(initialProducts.slice(0, 3));
    const [hasMore, setHasMore] = useState(initialProducts.length > 3);
    const loaderRef = useRef(null);

    // Intersection Observer callback
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting && hasMore && !loading) {
                    loadMoreProducts();
                }
            },
            { threshold: 0.1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [hasMore, loading]);

    const loadMoreProducts = () => {
        setLoading(true);

        // Simulate API call with timeout
        setTimeout(() => {
            const currentLength = products.length;
            const nextProducts = initialProducts.slice(currentLength, currentLength + 3);

            setProducts([...products, ...nextProducts]);
            setHasMore(products.length + nextProducts.length < initialProducts.length);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="product-grid-container">
            <div className={`shop-product-wrap ${viewMode}-view row mbn-30`}>
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 col-sm-6">
                        <ProductItem product={product} viewMode={viewMode} />
                    </div>
                ))}
            </div>

            {/* Loader and infinite scroll trigger */}
            <div ref={loaderRef} className="load-more-trigger">
                {loading && <Loader />}
            </div>

         
        </div>
    );
};

export default ProductGrid;