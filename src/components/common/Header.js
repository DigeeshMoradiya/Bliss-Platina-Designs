import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


export default function Header() {
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const pathname = usePathname();
    return (
        <header className="header-area header-wide">
            {/* Top Bar */}
            <div className="main-header d-none d-lg-block">
                <div className="header-top bdr-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="welcome-message">
                                    <p>Welcome to Bliss Platina Jewelry online store</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mobile-number">
                                    <p>Contact Us on : +91 9876543210</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="header-top-settings">
                                    <ul className="nav justify-content-end align-items-center">
                                        <li className="curreny-wrap cursor-auto">
                                            $ USD</li>
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
                                        <img src="/assets/img/logo/logo.png" alt="Brand Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 position-static d-flex justify-content-center">
                                <div className="main-menu-area">
                                    <div className="main-menu">
                                        <nav className="desktop-menu">
                                            <ul>
                                                <li className={pathname === '/' ? 'active position-static' : 'position-static'}>
                                                    <Link href="/">
                                                        Engagement Rings <i className="fa fa-angle-down"></i>
                                                    </Link>
                                                    <ul className="megamenu dropdown">
                                                        <li className="mega-title"><span>Lab Grown Diamonds</span>
                                                            <ul>
                                                                <li><Link href="/shop">Solitaire Rings</Link></li>
                                                                <li><Link href="/shop">Halo Rings</Link></li>
                                                                <li><Link href="/shop">Colored Diamond Rings</Link></li>
                                                                <li><Link href="/shop">Bridal Sets</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>Moissanite</span>
                                                            <ul>
                                                                <li><Link href="/shop">Eternity Rings</Link></li>
                                                                <li><Link href="/shop">Curved Rings</Link></li>
                                                                <li><Link href="/shop">Anniversary Rings</Link></li>
                                                                <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li className="mega-title"><span>Gemstones</span>
                                                            <ul>
                                                                <li><Link href="/shop">Sapphire Rings</Link></li>
                                                                <li><Link href="/shop">Emerald Rings</Link></li>
                                                                <li><Link href="/shop">Morganite Rings</Link></li>
                                                                <li><Link href="/shop">Opal Rings</Link></li>
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
                                                <li className="position-static">
                                                    <Link href="#">
                                                        Wadding Rings <i className="fa fa-angle-down"></i>
                                                    </Link>
                                                    <ul className="megamenu dropdown">
                                                        <li className="mega-title"><span>Lab Grown Diamonds</span>
                                                            <ul>
                                                                <li><Link href="/shop">Eternity Rings</Link></li>
                                                                <li><Link href="/shop">Curved Rings</Link></li>
                                                                <li><Link href="/shop">Anniversary Rings</Link></li>
                                                                <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>Moissanite</span>
                                                            <ul>
                                                                <li><Link href="/shop">Eternity Rings</Link></li>
                                                                <li><Link href="/shop">Curved Rings</Link></li>
                                                                <li><Link href="/shop">Anniversary Rings</Link></li>
                                                                <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                                <li><Link href="/shop">Classic Rings</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>Lab Grown Diamonds</span>
                                                            <ul>
                                                                <li><Link href="/shop">Eternity Rings</Link></li>
                                                                <li><Link href="/shop">Curved Rings</Link></li>
                                                                <li><Link href="/shop">Anniversary Rings</Link></li>
                                                                <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>Moissanite</span>
                                                            <ul>
                                                                <li><Link href="/shop">Eternity Rings</Link></li>
                                                                <li><Link href="/shop">Curved Rings</Link></li>
                                                                <li><Link href="/shop">Anniversary Rings</Link></li>
                                                                <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                                <li><Link href="/shop">Classic Rings</Link></li>
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

                                                <li className="shop position-static">
                                                    <Link href="/">
                                                        Fine Jewelry <i className="fa fa-angle-down"></i>
                                                    </Link>
                                                    <ul className="megamenu dropdown">
                                                        <li className="mega-title"><span>Lab Grown Diamonds</span>
                                                            <ul>
                                                                <li><Link href="/shop">Earrings</Link></li>
                                                                <li><Link href="/shop">Pendants & Necklaces</Link></li>
                                                                <li><Link href="/shop">Bracelets</Link></li>
                                                                <li><Link href="/shop">Bridal Sets</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><span>Moissanite</span>
                                                            <ul>
                                                                <li><Link href="/shop">Moissanite</Link></li>
                                                                <li><Link href="/shop">Earrings</Link></li>
                                                                <li><Link href="/shop">Pendants</Link></li>
                                                                <li><Link href="/shop">Bracelets</Link></li>
                                                                <li><Link href="/shop">Bridal Sets</Link></li>
                                                            </ul>
                                                        </li>


                                                        <li className="megamenu-banners d-none d-lg-block">
                                                            <Link href="/product-details">
                                                                <img src="/assets/img/banner/img1-static-menu.jpg" alt="" />
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className={pathname === '/custom-design' ? 'active' : ''}>
                                                    <Link href="/custom-design" >
                                                        Custom Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/daimond">
                                                        Diamond
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact-us">Contact Us</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
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
                                        {/* <Image src="/assets/img/logo/logo.png" alt="Brand Logo" width={120} height={40} /> */}
                                        <img src="/assets/img/logo/logo.png" alt="Brand Logo" />
                                    </Link>
                                </div>
                                <div className="mobile-menu-toggler">
                                    {/* <div className="mini-cart-wrap">
                                        <Link href="/cart">
                                            <i className="pe-7s-shopbag"></i>
                                            <div className="notification">0</div>
                                        </Link>
                                    </div> */}
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
                                        <Link href="/">Engagement Rings</Link>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <Link href="/">Lab Grown Diamonds</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/">Solitaire Rings</Link></li>
                                                    <li><Link href="/index-2">Halo Rings</Link></li>
                                                    <li><Link href="/index-3">Colored Diamond Rings</Link></li>
                                                    <li><Link href="/index-3">Bridal Sets</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/">Moissanite</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/">Eternity Rings</Link></li>
                                                    <li><Link href="/index-2">Curved Rings</Link></li>
                                                    <li><Link href="/index-3">Anniversary Rings</Link></li>
                                                    <li><Link href="/index-3">Men’s Wedding Rings</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/">Gemstones</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/shop">Sapphire Rings</Link></li>
                                                    <li><Link href="/shop">Emerald Rings</Link></li>
                                                    <li><Link href="/shop">Morganite Rings</Link></li>
                                                    <li><Link href="/shop">Opal Rings</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="menu-item-has-children">
                                        <Link href="/">Wadding Rings</Link>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <Link href="/">Lab Grown Diamonds</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/shop">Eternity Rings</Link></li>
                                                    <li><Link href="/shop">Curved Rings</Link></li>
                                                    <li><Link href="/shop">Anniversary Rings</Link></li>
                                                    <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/">Moissanite</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/shop">Eternity Rings</Link></li>
                                                    <li><Link href="/shop">Curved Rings</Link></li>
                                                    <li><Link href="/shop">Anniversary Rings</Link></li>
                                                    <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                    <li><Link href="/shop">Classic Rings</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"> <Link href="/">Lab Grown Diamonds</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/shop">Eternity Rings</Link></li>
                                                    <li><Link href="/shop">Curved Rings</Link></li>
                                                    <li><Link href="/shop">Anniversary Rings</Link></li>
                                                    <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"> <Link href="/">Lab Grown Diamonds</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/shop">Eternity Rings</Link></li>
                                                    <li><Link href="/shop">Curved Rings</Link></li>
                                                    <li><Link href="/shop">Anniversary Rings</Link></li>
                                                    <li><Link href="/shop">Men’s Wedding Rings</Link></li>
                                                    <li><Link href="/shop">Classic Rings</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item-has-children">
                                        <Link href="/">Fine Jewelry</Link>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <Link href="/">Lab Grown Diamonds</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/shop">Earrings</Link></li>
                                                    <li><Link href="/shop">Pendants & Necklaces</Link></li>
                                                    <li><Link href="/shop">Bracelets</Link></li>
                                                    <li><Link href="/shop">Bridal Sets</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/">Moissanite</Link>
                                                <ul className="dropdown">
                                                    <li><Link href="/shop">Moissanite</Link></li>
                                                    <li><Link href="/shop">Earrings</Link></li>
                                                    <li><Link href="/shop">Pendants</Link></li>
                                                    <li><Link href="/shop">Bracelets</Link></li>
                                                    <li><Link href="/shop">Bridal Sets</Link></li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </li>

                                    {/* More menu items can be converted in same pattern... */}
                                    <li><Link href="/custom-design">Custom Design</Link></li>
                                    <li><Link href="/daimond">Diamond</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Settings */}
                        <div className="mobile-settings">
                            <ul className="nav">
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        <div>$ USA</div>
                                        {/* <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">$ USD</a>
                                            <a className="dropdown-item" href="#">€ EURO</a>
                                        </div> */}
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        {/* <a href="#" className="dropdown-toggle">My Account <i className="fa fa-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" href="/my-account">My Account</Link>
                                            <Link className="dropdown-item" href="/login-register">Login</Link>
                                            <Link className="dropdown-item" href="/login-register">Register</Link>
                                        </div> */}

                                        <div className="language cursor-auto">
                                            <Image src="/assets/img/icon/en.png" alt="flag" width={20} height={13} /> English
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
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </header>
    );
}
