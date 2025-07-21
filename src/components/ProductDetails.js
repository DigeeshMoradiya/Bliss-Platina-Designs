import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Breadcrumb from './common/Breadcrumb';


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

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [navMain, setNavMain] = useState(null);
    const [navThumbs, setNavThumbs] = useState(null);
    const mainSliderRef = useRef(null);
    const navSliderRef = useRef(null);

    useEffect(() => {
        if (navMain && navThumbs) {
            navMain.slickGoTo(0);
            navThumbs.slickGoTo(0);
        }
    }, [navMain, navThumbs]);

    const mainSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: navThumbs,
        // you can add responsive, prevArrow, nextArrow, etc.
    };

    const thumbSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: navMain,
        dots: false,
        infinite: false,
        focusOnSelect: true,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };


    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value) || 1);
    };
    const imageFiles = [
        'product-details-img1.jpg',
        'product-details-img2.jpg',
        'product-details-img3.jpg',
        'product-details-img4.jpg',
        'product-details-img5.jpg',
    ];

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
    return (
        <main>
            {/* Breadcrumb Area */}
            <Breadcrumb pageTitle="Product Details" secondTitle="Shop" />

            {/* Product Details */}
            <div className="shop-main-wrapper section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-1 order-lg-2">
                            <div className="product-details-inner">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <Slider {...mainSettings} ref={slider => setNavMain(slider)}
                                            className="product-large-slider">
                                            {imageFiles.map((img, index) => (
                                                <div key={index} className="pro-large-img img-zoom">
                                                    <img src={`/assets/img/product/${img}`} alt="product-details" />
                                                </div>
                                            ))}
                                        </Slider>
                                        <Slider
                                            {...thumbSettings}
                                            ref={(slider) => setNavThumbs(slider)}
                                            className="pro-nav slick-row-10 slick-arrow-style"
                                        >
                                            {imageFiles.map((img, index) => (
                                                <div key={index} className="pro-nav-thumb">
                                                    <img src={`/assets/img/product/${img}`} alt="product-details" />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="product-details-des">
                                            <div className="manufacturer-name">
                                                <Link href="/product-details">HasTech</Link>
                                            </div>
                                            <h3 className="product-name">Handmade Golden Necklace Full Family Package</h3>
                                            {/* <div className="ratings d-flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i}><i className="fa fa-star-o"></i></span>
                                                ))}
                                                <div className="pro-review">
                                                    <span>1 Reviews</span>
                                                </div>
                                            </div> */}
                                            <div className="price-box">
                                                <span className="price-regular">$70.00</span>
                                                <span className="price-old"><del>$90.00</del></span>
                                            </div>
                                            {/* <h5 className="offer-text"><strong>Hurry up</strong>! offer ends in:</h5>
                                            <div className="product-countdown" data-countdown="2022/12/20"></div>
                                            <div className="availability">
                                                <i className="fa fa-check-circle"></i>
                                                <span>200 in stock</span>
                                            </div> */}
                                            <p className="pro-desc">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua. Phasellus id nisi quis justo tempus mollis sed et dui.
                                            </p>
                                            <div className="quantity-cart-box d-flex align-items-center ">
                                                <h6 className="option-title">Matel:</h6>
                                                <div className="quantity">
                                                    {/* <div className="pro-qty"><input type="text" value="1" /></div> */}
                                                    <span className="px-3 py-1 border rounded-md text-sm text-gray-700 mr-5">10KT</span>
                                                    <span className="px-3 py-1 border rounded-md text-sm text-gray-700">12KT</span>
                                                    <span className="px-3 py-1 border rounded-md text-sm text-gray-700">18KT</span>
                                                    <span className="px-3 py-1 border rounded-md text-sm text-gray-700">950 Platinum</span>
                                                </div>
                                                {/* <div className="action_link">
                                                    <button className="btn btn-cart2">Add to cart</button>
                                                </div> */}
                                            </div>
                                            <div className="pro-size">
                                                <h6 className="option-title">size:</h6>
                                                <p>
                                                    Custom Size Available
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
                                                <ul className="color-categories">
                                                    <li><a className="c-lightblue cursor-pointer-none" title="LightSteelblue"></a></li>
                                                    <li><a className="c-darktan cursor-pointer-none" title="Darktan"></a></li>
                                                    <li><a className="c-grey cursor-pointer-none" title="Grey"></a></li>
                                                    {/* <li><a className="c-brown" href="#" title="Brown"></a></li> */}
                                                </ul>
                                            </div>
                                            <div className="action_link">
                                                <button className="btn btn-cart2">Buy Now</button>
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
                                                        <div className='tab-one'>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus
                                                            </p>
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
                                                                    <td>size</td>
                                                                    <td>Custom Size Available</td>
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

                                {relatedProducts.map((product) => (
                                    <div key={product.id} className="product-item">
                                        <figure className="product-thumb">
                                            <Link href="/product-details">
                                                <img src={product.img1} alt="product" className="pri-img" />
                                                <img src={product.img2} alt="product" className="sec-img" />
                                            </Link>
                                            <div className="product-badge">
                                                {product.badge.map((label, index) => (
                                                    <div key={index} className={`product-label ${label.includes('%') ? 'discount' : 'new'}`}>
                                                        <span>{label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* <div className="button-group">
                                                <a href="#" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                <a href="#" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><i className="pe-7s-search"></i></a>
                                            </div> */}
                                            <div className="cart-hover">
                                                <button className="btn btn-cart">buy now</button>
                                            </div>
                                        </figure>
                                        <div className="product-caption text-center">
                                            <div className="product-identity">
                                                <p className="manufacturer-name"><Link href="/product-details">{product.brand}</Link></p>
                                            </div>
                                            <ul className="color-categories">
                                                <li><a className="c-lightblue cursor-pointer-none" title="LightSteelblue"></a></li>
                                                <li><a className="c-darktan cursor-pointer-none" title="Darktan"></a></li>
                                                <li><a className="c-grey cursor-pointer-none" title="Grey"></a></li>
                                                {/* <li><a className="c-brown" href="#" title="Brown"></a></li> */}
                                            </ul>
                                            <h6 className="product-name"><Link href="/product-details">{product.name}</Link></h6>
                                            <div className="price-box">
                                                <span className="price-regular">${product.price}.00</span>
                                                {product.oldPrice && <span className="price-old"><del>${product.oldPrice}.00</del></span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default ProductDetails;