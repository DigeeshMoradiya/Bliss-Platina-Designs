import Image from 'next/image';
import Link from 'next/link';



const ProductItem = ({ product, viewMode }) => {
    if (viewMode === 'grid') {
        return (
            <div className="product-item">
                <figure className="product-thumb">
                    <Link href={`/product-details/${product.id}`}>
                        {/* <Image
                                className="pri-img"
                                src={product.primaryImage}
                                alt={product.name}
                                width={300}
                                height={300}
                            />
                            <Image
                                className="sec-img"
                                src={product.secondaryImage}
                                alt={product.name}
                                width={300}
                                height={300}
                            /> */}
                        <img className="pri-img" src={product.primaryImage} alt="product" />
                        <img className="sec-img" src={product.secondaryImage} alt="product" />
                    </Link>
                    <div className="product-badge">
                        {product.isNew && (
                            <div className="product-label new">
                                <span>new</span>
                            </div>
                        )}
                        {product.discount > 0 && (
                            <div className="product-label discount">
                                <span>{product.discount}%</span>
                            </div>
                        )}
                    </div>
                    {/* <div className="button-group">
                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist">
                            <i className="pe-7s-like"></i>
                        </a>
                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                            <i className="pe-7s-refresh-2"></i>
                        </a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view">
                            <span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                <i className="pe-7s-search"></i>
                            </span>
                        </a>
                    </div> */}
                    <div className="cart-hover">
                        <button className="btn btn-cart">Buy Now</button>
                    </div>
                </figure>
                <div className="product-caption text-center">
                    <div className="product-identity">
                        <p className="manufacturer-name">
                            <Link href={`/product-details`}>
                                {product.manufacturer}
                            </Link>
                        </p>
                    </div>
                    {/* <ul className="color-categories">
                        {product.colors.map((color, index) => (
                            <li key={index}>
                                <a className={`c-${color.toLowerCase()}`} href="#" title={color}></a>
                            </li>
                        ))}

                    </ul> */}
                    <ul className="color-categories">
                        <li><a className="c-lightblue cursor-pointer-none" title="LightSteelblue"></a></li>
                        <li><a className="c-darktan cursor-pointer-none" title="Darktan"></a></li>
                        <li><a className="c-grey cursor-pointer-none" title="Grey"></a></li>
                        {/* <li><a className="c-brown" href="#" title="Brown"></a></li> */}
                    </ul>
                    <h6 className="product-name">
                        <Link href={`/product-details/${product.id}`}>
                            {product.name}
                        </Link>
                    </h6>
                    <div className="price-box">
                        <span className="price-regular">${product.price.toFixed(2)}</span>
                        {product.oldPrice > 0 && (
                            <span className="price-old"><del>${product.oldPrice.toFixed(2)}</del></span>
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="product-list-item">
                <figure className="product-thumb">
                    <Link href={`/product-details/${product.id}`}>
                        <Image
                            className="pri-img"
                            src={product.primaryImage}
                            alt={product.name}
                            width={300}
                            height={300}
                        />
                        <Image
                            className="sec-img"
                            src={product.secondaryImage}
                            alt={product.name}
                            width={300}
                            height={300}
                        />
                    </Link>
                    <div className="product-badge">
                        {product.isNew && (
                            <div className="product-label new">
                                <span>new</span>
                            </div>
                        )}
                        {product.discount > 0 && (
                            <div className="product-label discount">
                                <span>{product.discount}%</span>
                            </div>
                        )}
                    </div>
                    <div className="button-group">
                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist">
                            <i className="pe-7s-like"></i>
                        </a>
                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare">
                            <i className="pe-7s-refresh-2"></i>
                        </a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view">
                            <span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View">
                                <i className="pe-7s-search"></i>
                            </span>
                        </a>
                    </div>
                    <div className="cart-hover">
                        <button className="btn btn-cart">add to cart</button>
                    </div>
                </figure>
                <div className="product-content-list">
                    <div className="manufacturer-name">
                        <Link href={`/product-details/${product.id}`}>
                            {product.manufacturer}
                        </Link>
                    </div>
                    <ul className="color-categories">
                        {product.colors.map((color, index) => (
                            <li key={index}>
                                <a className={`c-${color.toLowerCase()}`} href="#" title={color}></a>
                            </li>
                        ))}
                    </ul>
                    <h5 className="product-name">
                        <Link href={`/product-details/${product.id}`}>
                            {product.name}
                        </Link>
                    </h5>
                    <div className="price-box">
                        <span className="price-regular">${product.price.toFixed(2)}</span>
                        {product.oldPrice > 0 && (
                            <span className="price-old"><del>${product.oldPrice.toFixed(2)}</del></span>
                        )}
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                        quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                        rem, accusantium adipisci officia eaque.</p>
                </div>
            </div>
        );
    }
};

export default ProductItem;