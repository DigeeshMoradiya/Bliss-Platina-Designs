'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-widget-area">
            <div className="footer-top section-padding">
                <div className="container">
                    <div className="row">
                        {/* Logo & About */}
                        <div className="col-lg-3 col-md-6">
                            <div className="widget-item">
                                <div className="widget-title">
                                    <div className="widget-logo">
                                        <Link href="/">
                                            {/* <Image src="/assets/img/logo/logo.png" alt="brand logo" width={150} height={50} />   */}
                                            <img src="/assets/img/logo/logo.png" alt="Brand Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="widget-body">
                                    <p>
                                        We are a team of designers and developers that create high quality wordpress, shopify,
                                        Opencart
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="col-lg-3 col-md-6">
                            <div className="widget-item">
                                <h6 className="widget-title">Contact Us</h6>
                                <div className="widget-body">
                                    <address className="contact-block">
                                        <ul>
                                            <li><i className="pe-7s-home"></i> 4710-4890 Breckinridge USA</li>
                                            <li><i className="pe-7s-mail"></i> <a href="mailto:demo@plazathemes.com">demo@yourdomain.com</a></li>
                                            <li><i className="pe-7s-call"></i> <a href="tel:(012)800456789987">(012) 800 456 789-987</a></li>
                                        </ul>
                                    </address>
                                </div>
                            </div>
                        </div>

                        {/* Information */}
                        <div className="col-lg-3 col-md-6">
                            <div className="widget-item">
                                <h6 className="widget-title">Information</h6>
                                <div className="widget-body">
                                    <ul className="info-list">
                                        <li><Link href="/aboutus">About Us</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/faq">FAQ&rsquo;s</Link></li>
                                        <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                                        <li><Link href="/contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Follow Us */}
                        <div className="col-lg-3 col-md-6">
                            <div className="widget-item">
                                <h6 className="widget-title">Follow Us</h6>
                                <div className="widget-body social-link">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter & Payment */}
                    <div className="row align-items-center mt-20">
                        <div className="col-md-6">
                            <div className="newsletter-wrapper">
                                <h6 className="widget-title-text">Signup for newsletter</h6>
                                <form className="newsletter-inner" id="mc-form">
                                    <input type="email" className="news-field" id="mc-email" autoComplete="off" placeholder="Enter your email address" />
                                    <button type="submit" className="news-btn" id="mc-submit">Subscribe</button>
                                </form>
                                <div className="mailchimp-alerts">
                                    <div className="mailchimp-submitting"></div>
                                    <div className="mailchimp-success"></div>
                                    <div className="mailchimp-error"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-text text-center">
                                <p>
                                    &copy; {new Date().getFullYear()} <b>Bliss Platina</b> Made with <i className="fa fa-heart text-danger"></i> by{' '}
                                    <a href="https://bliss-platina-design.com" target="_blank" rel="noopener noreferrer"><b>Bliss Platina</b></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
