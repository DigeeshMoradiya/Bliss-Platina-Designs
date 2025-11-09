import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



const ProductItem = ({ product, viewMode }) => {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push(`/shop/${product.slug}`);
    };

    const handleClickBuynow = (slug) => {
        router.push(`/shop/${slug}`);
    };
    let imageFiles = [];

    if (Array.isArray(product?.images)) {
        // If images is already an array
        imageFiles = product.images;
    } else if (typeof product?.images === "string" && product.images.trim() !== "") {
        // If images is JSON string
        try {
            imageFiles = JSON.parse(product.images);
        } catch (e) {
            imageFiles = [];
        }
    } else {
        imageFiles = [];
    }
    return (
        <div className="product-item">
            <figure className="product-thumb">
                <Link href={`/shop/${product.slug}`} onClick={handleClick}>

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
                    <img className="pri-img" src={imageFiles?.[0]} alt="product" />
                    <img className="sec-img" src={imageFiles?.[1]} alt="product" />
                </Link>
                <div className="product-badge">
                    {product.is_new && (
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
                    <button className="btn btn-cart" onClick={() => handleClickBuynow(product.slug)}>Buy Now</button>
                </div>
            </figure>
            <div className="product-caption text-center">
                <div className="product-identity">
                    <p className="manufacturer-name">
                        <Link href={`/shop/${product.slug}`} onClick={handleClick}>
                            {product.category}
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
                    <li><a className="c-lightblue cursor-pointer-none" title="White Gold"></a></li>
                    <li><a className="c-darktan cursor-pointer-none" title="Yellow Gold"></a></li>
                    <li><a className="c-grey cursor-pointer-none" title="Rose Gold"></a></li>
                    {/* <li><a className="c-brown" href="#" title="Brown"></a></li> */}
                </ul>
                <h6 className="product-name">
                    {/* <Link href={`/product-details/${product.slug}`}>
                            {product.name}
                        </Link> */}
                    <Link href={`/shop/${product.slug}`} onClick={handleClick}>
                        {product.name}
                    </Link>
                </h6>
                {/* <div className="price-box">
                        <span className="price-regular">${product.price.toFixed(2)}</span>
                        {product.oldPrice > 0 && (
                            <span className="price-old"><del>${product.oldPrice.toFixed(2)}</del></span>
                        )}
                    </div> */}
                <div className="price-box">
                    {/* <span className="price-regular">
                        ${(product?.price * (1 - product?.discount / 100))
                            .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span> */}
                    <span className="price-regular">
                        ${Math.round(product?.price * (1 - product?.discount / 100))
                            .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    {product?.discount > 0 && (
                        <span className="price-old">
                            <del>
                                ${product?.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </del>
                        </span>
                    )}
                </div>

            </div>
        </div>
    );

};

export default ProductItem;