import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { useRouter } from 'next/navigation';

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

// Sample product data with additional categories
const products = [
    {
        id: 1,
        category: 'Entertainment',
        name: 'Perfect Diamond Jewelry',
        manufacturer: 'Gold',
        price: 60.0,
        oldPrice: 70.0,
        discount: '10%',
        isNew: true,
        isSale: false,
        primaryImage: '/assets/img/product/product-1.jpg',
        secondaryImage: '/assets/img/product/product-18.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    {
        id: 2,
        category: 'Entertainment',
        name: 'Handmade Golden Necklace',
        manufacturer: 'mony',
        price: 50.0,
        oldPrice: 80.0,
        discount: 'new',
        isNew: false,
        isSale: true,
        primaryImage: '/assets/img/product/product-2.jpg',
        secondaryImage: '/assets/img/product/product-17.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    {
        id: 3,
        category: 'Entertainment',
        name: 'Perfect Diamond Jewelry',
        manufacturer: 'Diamond',
        price: 99.0,
        oldPrice: null,
        discount: null,
        isNew: true,
        isSale: false,
        primaryImage: '/assets/img/product/product-3.jpg',
        secondaryImage: '/assets/img/product/product-16.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    {
        id: 4,
        category: 'Entertainment',
        name: 'Diamond Exclusive Ornament',
        manufacturer: 'silver',
        price: 55.0,
        oldPrice: 75.0,
        discount: '15%',
        isNew: false,
        isSale: true,
        primaryImage: '/assets/img/product/product-4.jpg',
        secondaryImage: '/assets/img/product/product-15.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    {
        id: 5,
        category: 'Entertainment',
        name: 'Citygold Exclusive Ring',
        manufacturer: 'mony',
        price: 60.0,
        oldPrice: 70.0,
        discount: '20%',
        isNew: true,
        isSale: false,
        primaryImage: '/assets/img/product/product-5.jpg',
        secondaryImage: '/assets/img/product/product-14.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    {
        id: 6,
        category: 'Entertainment',
        name: 'Perfect Diamond Jewelry',
        manufacturer: 'Gold',
        price: 60.0,
        oldPrice: 70.0,
        discount: '10%',
        isNew: true,
        isSale: false,
        primaryImage: '/assets/img/product/product-6.jpg',
        secondaryImage: '/assets/img/product/product-13.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    {
        id: 7,
        category: 'Entertainment',
        name: 'Perfect Diamond Jewelry',
        manufacturer: 'Gold',
        price: 60.0,
        oldPrice: 70.0,
        discount: '10%',
        isNew: true,
        isSale: false,
        primaryImage: '/assets/img/product/product-1.jpg',
        secondaryImage: '/assets/img/product/product-18.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    {
        id: 8,
        category: 'Entertainment',
        name: 'Perfect Diamond Jewelry',
        manufacturer: 'Gold',
        price: 60.0,
        oldPrice: 70.0,
        discount: '10%',
        isNew: true,
        isSale: false,
        primaryImage: '/assets/img/product/product-1.jpg',
        secondaryImage: '/assets/img/product/product-18.jpg',
        colors: ['LightSteelblue', 'Darktan', 'Grey', 'Brown'],
    },
    // Add more products as needed
];

export default function NewArrivalSection({ newArrivalsData }) {
    const [activeTab, setActiveTab] = useState('Entertainment');
    const router = useRouter();

    const categories = ['Entertainment', 'Storage', 'Lying', 'Tables'];

    const filteredProducts = products.filter(
        (product) => product.category === activeTab
    );

    // Slick Slider settings
    const sliderSettings = {
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }]
    };

    const handleClick = (e, slug) => {
        e.preventDefault();
        router.push(`/shop/${slug}`);
    };



    return (
        <section className="feature-product section-padding pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">New Arrivals</h2>
                            <p className="sub-title">Discover the latest in fine jewelry</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Slider {...sliderSettings} className="slick-row-10 slick-arrow-style">
                            {newArrivalsData
                                .map((product) => {

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
                                        <div key={product.id} className="product-item">
                                            <figure className="product-thumb">
                                                <Link href={`/shop/${product.slug}`} onClick={(e) => handleClick(e, product.slug)}>
                                                    {/* <Image
                            src={product.primaryImage}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="pri-img"
                          />
                          <Image
                            src={product.secondaryImage}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="sec-img"
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
                                <a
                                  href="wishlist.html"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="left"
                                  title="Add to wishlist"
                                >
                                  <i className="pe-7s-like"></i>
                                </a>
                                <a
                                  href="compare.html"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="left"
                                  title="Add to Compare"
                                >
                                  <i className="pe-7s-refresh-2"></i>
                                </a>
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick_view"
                                  data-bs-placement="left"
                                  title="Quick View"
                                >
                                  <i className="pe-7s-search"></i>
                                </a>
                              </div>
                              <div className="cart-hover">
                                <button className="btn btn-cart">Add to cart</button>
                              </div> */}
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name">
                                                        <Link href={`/shop/${product.slug}`} onClick={(e) => handleClick(e, product.slug)}>
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
                                                    <Link href={`/shop/${product.slug}`} onClick={(e) => handleClick(e, product.slug)}>
                                                        {product.name}
                                                    </Link>
                                                </h6>
                                                <div className="price-box">
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
        </section>
    );
}