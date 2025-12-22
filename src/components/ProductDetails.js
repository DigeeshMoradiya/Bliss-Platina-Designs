import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Breadcrumb from './common/Breadcrumb';
import SEO from './common/SEO';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


// Custom Arrow Components
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            type="button"
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <i className="pe-7s-angle-left"></i>
        </button>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            type="button"
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <i className="pe-7s-angle-right"></i>
        </button>
    );
};

const ProductDetails = ({ productData, settingData, relatedProductData }) => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [navMain, setNavMain] = useState(null);
    const [navThumbs, setNavThumbs] = useState(null);
    const mainSliderRef = useRef(null);
    const navSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);
    const router = useRouter()

    const whatsappPhoneNo = settingData?.replace(/\D/g, ""); // removes non-digits




    useEffect(() => {
        if (mainSliderRef.current && thumbSliderRef.current) {
            // Force update the asNavFor references
            mainSliderRef.current.slickGoTo(0);
            thumbSliderRef.current.slickGoTo(0);

            // Update the slider references
            mainSettings.asNavFor = thumbSliderRef.current;
            thumbSettings.asNavFor = mainSliderRef.current;
        }
    }, []);

    const mainSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: thumbSliderRef.current,

        ref: (slider) => (mainSliderRef.current = slider)
    };
    const thumbSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        // ref: (slider) => (thumbSliderRef.current = slider),
        vertical: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    vertical: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };


    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value) || 1);
    };
    // const imageFiles = productData?.images ? JSON.parse(productData.images) : [];
    let imageFiles = [];

    if (Array.isArray(productData?.images)) {
        // If images is already an array
        imageFiles = productData.images;
    } else if (typeof productData?.images === "string" && productData.images.trim() !== "") {
        // If images is JSON string
        try {
            imageFiles = JSON.parse(productData.images);
        } catch (e) {
            imageFiles = [];
        }
    } else {
        imageFiles = [];
    }


    const relatedProducts = [
        { id: 1, name: 'Perfect Diamond Jewelry', price: 60, oldPrice: 70, img1: '/assets/img/product/product-11.jpg', img2: '/assets/img/product/product-8.jpg', badge: ['new', '10%'], brand: 'Gold' },
        { id: 2, name: 'Handmade Golden Necklace', price: 50, oldPrice: 80, img1: '/assets/img/product/product-12.jpg', img2: '/assets/img/product/product-7.jpg', badge: ['sale', 'new'], brand: 'mony' },
        { id: 3, name: 'Perfect Diamond Jewelry', price: 99, img1: '/assets/img/product/product-13.jpg', img2: '/assets/img/product/product-6.jpg', badge: ['new'], brand: 'Diamond' },
        { id: 4, name: 'Diamond Exclusive Ornament', price: 55, oldPrice: 75, img1: '/assets/img/product/product-14.jpg', img2: '/assets/img/product/product-5.jpg', badge: ['sale', '15%'], brand: 'silver' },
        { id: 5, name: 'Citygold Exclusive Ring', price: 60, oldPrice: 70, img1: '/assets/img/product/product-15.jpg', img2: '/assets/img/product/product-4.jpg', badge: ['new', '20%'], brand: 'mony' }
    ];

    const settings = {
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        centerMode: false,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 992, // < 992px
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                },
            },
            {
                breakpoint: 768, // < 768px
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 480, // < 480px
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    const isVideo = (url) => {
        const videoExtensions = ['.mp4', '.mov', '.avi', '.webm', '.mkv'];
        return typeof url === "string" && videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
    };

    const handleZoom = (e) => {
        const zoomer = e.currentTarget;
        const offsetX = e.nativeEvent.offsetX;
        const offsetY = e.nativeEvent.offsetY;
        const x = (offsetX / zoomer.offsetWidth) * 100;
        const y = (offsetY / zoomer.offsetHeight) * 100;
        zoomer.style.transformOrigin = `${x}% ${y}%`;
        zoomer.style.transform = 'scale(1.2)';
    };

    const resetZoom = () => {
        const zoomImages = document.querySelectorAll('.pro-large-img img');
        zoomImages.forEach(img => {
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center center';
        });
    };

    const handleWhatsapp = () => {
        window.open(`https://api.whatsapp.com/send?phone=${whatsappPhoneNo}`, "_blank");
    };

    const handleCustomizeorder = (skuNo) => {
        router.push("/custom-design")
        Cookies.set("sku_no", skuNo)
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(`/shop/${productData.slug}`);
    };

    const handleClickRelated = (e, slug) => {
        e.preventDefault();
        router.push(`/shop/${slug}`);
    };

    const handleClickBuynow = (slug) => {
        router.push(`/shop/${slug}`);
    };

    return (
        <>
            <SEO
                title={productData?.name}
                description={productData?.short_description}
            />
            < main >
                {/* Breadcrumb Area */}
                < Breadcrumb pageTitle="Product Details" secondTitle="Shop" />

                {/* Product Details */}
                <div
                    className={`shop-main-wrapper section-padding ${relatedProductData?.length !== 0 ? "pb-0" : ""
                        }`}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 order-1 order-lg-2">
                                <div className="product-details-inner">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Slider {...mainSettings} className='product-large-slider'
                                            >
                                                {imageFiles.map((item, index) => (
                                                    <div key={index} className="pro-large-img img-zoom">
                                                        {isVideo(item) ? (
                                                            <video
                                                                src={item}
                                                                //  controls
                                                                // style={{ width: '100%', height: 'auto' }}
                                                                autoPlay
                                                                muted
                                                                loop
                                                                playsInline
                                                                onMouseOver={(e) => e.target.pause()}
                                                                onMouseOut={(e) => e.target.play()}
                                                                style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                                                            />
                                                        ) : (
                                                            <img src={item} alt="product-details"
                                                                onMouseMove={handleZoom}
                                                                onMouseLeave={resetZoom}
                                                            // className="transition-transform duration-300 ease-in-out"
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </Slider>
                                            <Slider
                                                {...thumbSettings}
                                                className='pro-nav'
                                            >
                                                {imageFiles.map((item, index) => (
                                                    <div key={index} className="pro-nav-thumb p-1"
                                                        onClick={() => {
                                                            mainSliderRef.current.slickGoTo(index);
                                                        }}
                                                    >
                                                        {isVideo(item) ? (
                                                            <video
                                                                src={item}
                                                                autoPlay
                                                                muted
                                                                loop
                                                                playsInline
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        ) : (
                                                            <img src={item} alt="product-details" />
                                                        )}
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="product-details-des">
                                                <div className="manufacturer-name">
                                                    {/* <Link href="/product-details">{productData?.category}</Link> */}
                                                    <Link href={`/shop/${productData?.slug}`} onClick={handleClick}>
                                                        {productData?.category}
                                                    </Link>
                                                </div>
                                                <h3 className="product-name">{productData?.name}</h3>
                                                {/* <div className="ratings d-flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i}><i className="fa fa-star-o"></i></span>
                                                ))}
                                                <div className="pro-review">
                                                    <span>1 Reviews</span>
                                                </div>
                                            </div> */}
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="price-box">
                                                        {/* <span className="price-regular">
                                                            ${(productData?.price * (1 - productData?.discount / 100))
                                                                .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                        </span> */}
                                                        <span className="price-regular">
                                                            ${Math.round(productData?.price * (1 - productData?.discount / 100))
                                                                .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                        </span>
                                                        {productData?.discount > 0 && (
                                                            <span className="price-old">
                                                                <del>
                                                                    ${productData?.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                                </del>
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="pro-size mb-0">
                                                        <h6 className="option-title ">SKU:</h6>
                                                        <p>
                                                            {productData?.skuno}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* <h5 className="offer-text"><strong>Hurry up</strong>! offer ends in:</h5>
                                            <div className="product-countdown" data-countdown="2022/12/20"></div>
                                            <div className="availability">
                                                <i className="fa fa-check-circle"></i>
                                                <span>200 in stock</span>
                                            </div> */}
                                                <p className="pro-desc">
                                                    {productData?.short_description}
                                                </p>
                                                <div className="quantity-cart-box d-flex align-items-center ">
                                                    <h6 className="option-title">Matel:</h6>
                                                    <div className="quantity d-flex align-items-center gap-3">
                                                        {/* <div className="pro-qty"><input type="text" value="1" /></div> */}
                                                        <div className="px-3 py-1  border-color-metal rounded-md text-sm text-gray-700">10KT</div>
                                                        <div className="px-3 py-1  border-color-metal rounded-md text-sm text-gray-700">14KT</div>
                                                        <div className="px-3 py-1  border-color-metal rounded-md text-sm text-gray-700">18KT</div>
                                                        <div className="px-3 py-1  border-color-metal rounded-md text-sm text-gray-700">950 Platinum</div>
                                                    </div>
                                                    {/* <div className="action_link">
                                                    <button className="btn btn-cart2">Add to cart</button>
                                                </div> */}
                                                </div>
                                                <div className="pro-size">
                                                    <h6 className="option-title">size (US):</h6>
                                                    <p>
                                                        {productData?.size
                                                            ? `${productData.size.replace(/"/g, '')}, Custom Size Available`
                                                            : 'Custom Size Available'}
                                                    </p>


                                                    {/* <select className="nice-select">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select> */}
                                                </div>
                                                <div className="color-option">
                                                    <h6 className="option-title">color:</h6>
                                                    <ul className="color-categories-details">
                                                        <li><a className="c-lightblue cursor-pointer-none" title="White Gold"></a></li>
                                                        <li><a className="c-darktan cursor-pointer-none" title="Yellow Gold"></a></li>
                                                        <li><a className="c-grey cursor-pointer-none" title="Rose Gold"></a></li>
                                                        {/* <li><a className="c-brown" href="#" title="Brown"></a></li> */}
                                                    </ul>
                                                </div>
                                                {/* <div className="action_link">
                                                    <button className="btn btn-cart2" onClick={handleWhatsapp}>Buy Now</button>
                                                    <button className="btn btn-cart2" onClick={handleWhatsapp}>Customize order</button>
                                                </div> */}

                                                <div className="action_link d-flex gap-3">
                                                    <button className="btn btn-cart2" onClick={handleWhatsapp}>Buy Now</button>
                                                    <button className="btn btn-custome-order" onClick={() => handleCustomizeorder(productData?.skuno)}>Customize order</button>
                                                </div>
                                                {/* <div className="useful-links">
                                                <a href="#" title="Compare"><i className="pe-7s-refresh-2"></i> compare</a>
                                                <a href="#" title="Wishlist"><i className="pe-7s-like"></i> wishlist</a>
                                            </div> */}
                                                {/* <div className="like-icon">
                                                <a href="#" className="facebook"><i className="fa fa-facebook"></i> like</a>
                                                <a href="#" className="twitter"><i className="fa fa-twitter"></i> tweet</a>
                                                <a href="#" className="pinterest"><i className="fa fa-pinterest"></i> save</a>
                                                <a href="#" className="google"><i className="fa fa-google-plus"></i> share</a>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details-reviews section-padding pb-0">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="product-review-info">
                                                <ul className="nav review-tab">
                                                    {['description', 'information'].map((tab) => (
                                                        <li key={tab}>
                                                            <a
                                                                onClick={() => setActiveTab(tab)}
                                                                className={`${activeTab === tab ? 'active cursor-pointer' : 'cursor-pointer'}`}
                                                            >
                                                                {tab === 'reviews' ? 'reviews (1)' : tab}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="tab-content reviews-tab">
                                                    {activeTab === 'description' && (
                                                        <div className="tab-pane fade show active">
                                                            <div className="tab-one">
                                                                {productData?.description
                                                                    ?.split("\n")
                                                                    .filter(line => line.trim() !== "")
                                                                    .map((line, index) => (
                                                                        <p key={index} className="">
                                                                            {line.trim()}
                                                                        </p>
                                                                    ))}
                                                            </div>

                                                        </div>
                                                    )}
                                                    {activeTab === 'information' && (
                                                        <div className="tab-pane fade show active">
                                                            <table className="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>color</td>
                                                                        <td>White Gold, Yellow Gold, Rose Gold</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>size (US)</td>
                                                                        <td>
                                                                            {productData?.size
                                                                                ? `${productData.size.replace(/"/g, '')}, Custom Size Available`
                                                                                : 'Custom Size Available'}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    )}
                                                    {activeTab === 'reviews' && (
                                                        <div className="tab-pane fade show active">
                                                            <form action="#" className="review-form">
                                                                <h5>1 review for <span>Chaz Kangeroo</span></h5>
                                                                <div className="total-reviews">
                                                                    <div className="rev-avatar">
                                                                        <img src="/assets/img/about/avatar.jpg" alt="" />
                                                                    </div>
                                                                    <div className="review-box">
                                                                        <div className="ratings">
                                                                            {[...Array(4)].map((_, i) => (
                                                                                <span className="good" key={i}><i className="fa fa-star"></i></span>
                                                                            ))}
                                                                            <i className="fas fa-star text-gray-400"></i>
                                                                        </div>
                                                                        <div className="post-author">
                                                                            <p><span>admin -</span> 30 Mar, 2019</p>
                                                                        </div>
                                                                        <p>Aliquam fringilla euismod risus ac bibendum.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col">
                                                                        <label className="col-form-label"><span className="text-danger">*</span>
                                                                            Your Name</label>
                                                                        <input type="text" className="form-control" required />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col">
                                                                        <label className="col-form-label"><span className="text-danger">*</span>
                                                                            Your Email</label>
                                                                        <input type="email" className="form-control" required />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col">
                                                                        <label className="col-form-label"><span className="text-danger">*</span>
                                                                            Your Review</label>
                                                                        <textarea className="form-control" required></textarea>
                                                                        <div className="help-block pt-10"><span
                                                                            className="text-danger">Note:</span>
                                                                            HTML is not translated!
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col">
                                                                        <label className="col-form-label"><span className="text-danger">*</span>Rating</label>


                                                                        &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                                                        {[1, 2, 3, 4, 5].map((value) => (

                                                                            <input
                                                                                key={value}
                                                                                type="radio"
                                                                                value={value}
                                                                                name="rating"
                                                                                className='mx-1'
                                                                                defaultChecked={value === 5}
                                                                            />
                                                                        ))}
                                                                        <span>Good</span>

                                                                    </div>
                                                                </div>
                                                                <div className="buttons">
                                                                    <button className="btn btn-sqr">Continue</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Related Products */}
                {relatedProductData?.length !== 0 &&
                    <section className="related-products section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title text-center">
                                        <h2 className="title">Related Products</h2>
                                        <p className="sub-title">Add related products to weekly lineup</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Slider
                                        {...settings}
                                        className='slick-row-10 slick-arrow-style'
                                    >

                                        {relatedProductData.map((product, index) => {
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
                                                <div key={index} className="product-item">
                                                    <figure className="product-thumb">
                                                        {/* <Link href="/product-details">
                                                            <img src={images?.[0]} alt="product" className="pri-img" />
                                                            <img src={images?.[1]} alt="product" className="sec-img" />
                                                        </Link> */}
                                                        <Link href={`/shop/${product.slug}`} onClick={(e) => handleClickRelated(e, product.slug)}>
                                                            <img src={product.images?.[0]} alt="product" className="pri-img" />
                                                            <img src={product.images?.[1]} alt="product" className="sec-img" />
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
                                                <a href="#" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                <a href="#" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><i className="pe-7s-search"></i></a>
                                            </div> */}
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart" onClick={() => handleClickBuynow(product.slug)}>Buy Now</button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name">
                                                                {/* <Link href="/product-details">{product.category}</Link> */}
                                                                <Link href={`/shop/${product.slug}`} onClick={(e) => handleClickRelated(e, product.slug)}>
                                                                    {product.category}
                                                                </Link>
                                                            </p>
                                                        </div>
                                                        <ul className="color-categories">
                                                            <li><a className="c-lightblue cursor-pointer-none" title="White Gold"></a></li>
                                                            <li><a className="c-darktan cursor-pointer-none" title="Yellow Gold"></a></li>
                                                            <li><a className="c-grey cursor-pointer-none" title="Rose Gold"></a></li>
                                                            {/* <li><a className="c-brown" href="#" title="Brown"></a></li> */}
                                                        </ul>
                                                        <h6 className="product-name">
                                                            {/* <Link href="/product-details">{product.name}</Link> */}
                                                            <Link href={`/shop/${product.slug}`} onClick={handleClick}>
                                                                {product.name}
                                                            </Link>
                                                        </h6>
                                                        {/* <div className="price-box">
                                                            <span className="price-regular">${product.price}.00</span>
                                                            {product.oldPrice && <span className="price-old"><del>${product.oldPrice}.00</del></span>}
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
                                            )
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </section>}
            </main >
        </>
    );
};

export default ProductDetails;