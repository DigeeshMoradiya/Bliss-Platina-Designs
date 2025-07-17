import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Header() {
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);

    return (
        <header className="header-area header-wide">
            {/* Top Bar */}
            <div className="main-header d-none d-lg-block">
                <div className="header-top bdr-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="welcome-message">

                                    <p>Welcome to Corano Jewelry online store</p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right">
                                <div className="header-top-settings">
                                    <ul className="nav justify-content-end align-items-center">
                                        <li className="curreny-wrap cursor-auto">
                                            USD</li>
                                        <li className="language cursor-auto">
                                            <Image src="/assets/img/icon/en.png" alt="flag" width={20} height={13} /> English
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo and Navigation */}
                <div className="sticky top-0 z-[999] bg-white header-main-area">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <Link href="/">
                                        <Image src="/assets/img/logo/logo.png" alt="Brand Logo" width={130} height={40} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 position-static">
                                <div className="main-menu-area">
                                    <div className="main-menu">
                                        <nav className="desktop-menu">
                                            <ul>
                                                <li className="active">
                                                    <Link href="/">
                                                        Home <i className="fa fa-angle-down"></i>
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li><Link href="/">Home version 01</Link></li>
                                                        <li><Link href="/index-2">Home version 02</Link></li>
                                                        <li><Link href="/index-3">Home version 03</Link></li>
                                                        <li><Link href="/index-4">Home version 04</Link></li>
                                                        <li><Link href="/index-5">Home version 05</Link></li>
                                                        <li><Link href="/index-6">Home version 06</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="position-static">
                                                    <Link href="#">
                                                        pages <i className="fa fa-angle-down"></i>
                                                    </Link>
                                                    <ul className="megamenu dropdown">
                                                        <li className="mega-title"><span>column 01</span>
                                                            <ul>
                                                                <li><Link href="/shop">shop grid left sidebar</Link></li>
                                                                <li><Link href="/shop-grid-right-sidebar">shop grid right sidebar</Link></li>
                                                                <li><Link href="/shop-list-left-sidebar">shop list left sidebar</Link></li>
                                                                <li><Link href="/shop-list-right-sidebar">shop list right sidebar</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>column 02</span>
                                                            <ul>
                                                                <li><Link href="/product-details">product details</Link></li>
                                                                <li><Link href="/product-details-affiliate">product details affiliate</Link></li>
                                                                <li><Link href="/product-details-variable">product details variable</Link></li>
                                                                <li><Link href="/privacy-policy">privacy policy</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>column 03</span>
                                                            <ul>
                                                                <li><Link href="/cart">cart</Link></li>
                                                                <li><Link href="/checkout">checkout</Link></li>
                                                                <li><Link href="/compare">compare</Link></li>
                                                                <li><Link href="/wishlist">wishlist</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>column 04</span>
                                                            <ul>
                                                                <li><Link href="/my-account">my-account</Link></li>
                                                                <li><Link href="/login-register">login-register</Link></li>
                                                                <li><Link href="/about-us">about us</Link></li>
                                                                <li><Link href="/contact-us">contact us</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="megamenu-banners d-none d-lg-block">
                                                            <Link href="/product-details">
                                                                <img src="/assets/img/banner/img1-static-menu.jpg" alt="" />
                                                            </Link>
                                                        </li>
                                                        <li className="megamenu-banners d-none d-lg-block">
                                                            <Link href="/product-details">
                                                                <img src="/assets/img/banner/img2-static-menu.jpg" alt="" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/shop">
                                                        Shop <i className="fa fa-angle-down"></i>
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li><Link href="/shop">Shop Grid Left Sidebar</Link></li>
                                                        <li><Link href="/shop-grid-right-sidebar">Shop Grid Right Sidebar</Link></li>
                                                        <li><Link href="/shop-list-left-sidebar">Shop List Left Sidebar</Link></li>
                                                        <li><Link href="/shop-list-right-sidebar">Shop List Right Sidebar</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/blog">
                                                        Blog <i className="fa fa-angle-down"></i>
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li><Link href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                                        <li><Link href="/blog-list-left-sidebar">Blog List Left Sidebar</Link></li>
                                                        <li><Link href="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                                                        <li><Link href="/blog-list-right-sidebar">Blog List Right Sidebar</Link></li>
                                                        <li><Link href="/blog-grid-full-width">Blog Grid Full Width</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/contact-us">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="header-left d-flex align-items-center  justify-content-lg-end">
                                    <form className="header-search-box d-lg-none d-xl-block">
                                        <input type="text" placeholder="Search entire store here" className="header-search-field" />
                                        <button className="header-search-btn"><i className="pe-7s-search"></i></button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header d-lg-none d-md-block sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="mobile-main-header">
                                <div className="mobile-logo">
                                    <Link href="/">
                                        <Image src="/assets/img/logo/logo.png" alt="Brand Logo" width={120} height={40} />
                                    </Link>
                                </div>
                                <div className="mobile-menu-toggler">
                                    <div className="mini-cart-wrap">
                                        <Link href="/cart">
                                            <i className="pe-7s-shopbag"></i>
                                            <div className="notification">0</div>
                                        </Link>
                                    </div>
                                    <button className="mobile-menu-btn" onClick={() => setOffCanvasOpen(true)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Off-Canvas Menu */}
            <aside className={`off-canvas-wrapper ${offCanvasOpen ? 'open' : ''}`}>
                <div className="off-canvas-overlay" onClick={() => setOffCanvasOpen(false)}></div>
                <div className="off-canvas-inner-content">
                    <div className="btn-close-off-canvas" onClick={() => setOffCanvasOpen(false)}>
                        <i className="pe-7s-close"></i>
                    </div>

                    <div className="off-canvas-inner">
                        {/* Search Box */}
                        <div className="search-box-offcanvas">
                            <form>
                                <input type="text" placeholder="Search entire store here" className="header-search-field" />
                                <button type="submit" className="search-btn">
                                    <i className="pe-7s-search"></i>
                                </button>
                            </form>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="mobile-navigation">
                            <nav>
                                <ul className="mobile-menu">
                                    <li className="menu-item-has-children">
                                        <Link href="/">Home</Link>
                                        <ul className="dropdown">
                                            <li><Link href="/">Home version 01</Link></li>
                                            <li><Link href="/index-2">Home version 02</Link></li>
                                            <li><Link href="/index-3">Home version 03</Link></li>
                                            <li><Link href="/index-4">Home version 04</Link></li>
                                            <li><Link href="/index-5">Home version 05</Link></li>
                                            <li><Link href="/index-6">Home version 06</Link></li>
                                        </ul>
                                    </li>

                                    <li className="menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul className="megamenu dropdown">
                                            {[1, 2, 3, 4].map((col) => (
                                                <li key={col} className="mega-title menu-item-has-children">
                                                    <a href="#">Column 0{col}</a>
                                                    <ul className="dropdown">
                                                        {col === 1 && (
                                                            <>
                                                                <li><Link href="/shop">Shop grid left sidebar</Link></li>
                                                                <li><Link href="/shop-grid-right-sidebar">Shop grid right sidebar</Link></li>
                                                                <li><Link href="/shop-list-left-sidebar">Shop list left sidebar</Link></li>
                                                                <li><Link href="/shop-list-right-sidebar">Shop list right sidebar</Link></li>
                                                            </>
                                                        )}
                                                        {col === 2 && (
                                                            <>
                                                                <li><Link href="/product-details">Product details</Link></li>
                                                                <li><Link href="/product-details-affiliate">Product details affiliate</Link></li>
                                                                <li><Link href="/product-details-variable">Product details variable</Link></li>
                                                                <li><Link href="/privacy-policy">Privacy policy</Link></li>
                                                            </>
                                                        )}
                                                        {col === 3 && (
                                                            <>
                                                                <li><Link href="/cart">Cart</Link></li>
                                                                <li><Link href="/checkout">Checkout</Link></li>
                                                                <li><Link href="/compare">Compare</Link></li>
                                                                <li><Link href="/wishlist">Wishlist</Link></li>
                                                            </>
                                                        )}
                                                        {col === 4 && (
                                                            <>
                                                                <li><Link href="/my-account">My Account</Link></li>
                                                                <li><Link href="/login-register">Login / Register</Link></li>
                                                                <li><Link href="/about-us">About Us</Link></li>
                                                                <li><Link href="/contact-us">Contact Us</Link></li>
                                                            </>
                                                        )}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* More menu items can be converted in same pattern... */}
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Settings */}
                        <div className="mobile-settings">
                            <ul className="nav">
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        <a href="#" className="dropdown-toggle">Currency <i className="fa fa-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">$ USD</a>
                                            <a className="dropdown-item" href="#">€ EURO</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        <a href="#" className="dropdown-toggle">My Account <i className="fa fa-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" href="/my-account">My Account</Link>
                                            <Link className="dropdown-item" href="/login-register">Login</Link>
                                            <Link className="dropdown-item" href="/login-register">Register</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact & Social */}
                        <div className="offcanvas-widget-area">
                            <div className="off-canvas-contact-widget">
                                <ul>
                                    <li><i className="fa fa-mobile"></i> <a href="#">0123456789</a></li>
                                    <li><i className="fa fa-envelope-o"></i> <a href="#">info@yourdomain.com</a></li>
                                </ul>
                            </div>
                            <div className="off-canvas-social-widget">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </header>
    );
}
