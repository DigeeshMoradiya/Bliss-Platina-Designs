'use client';

import { storeSubscribe } from '@/lib/api/setting/setting';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useToast } from 'vyrn';
import * as Yup from 'yup';


export default function Footer({ settingData }) {
    const toast = useToast();
    const [loader, setLoader] = useState(false);


    const formik = useFormik({
        initialValues: {
            email: "",
        },

        validationSchema: Yup.object({
            email: Yup.string().email("Please enter a valid email address").required("Email is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            const payload = {
                email_address: values?.email,
                is_subscribe: true
            }
            setLoader(true);
            try {
                const result = await storeSubscribe("contactus", payload);
                if (result?.success === true) {
                    toast.success("Successfully subscribed!");
                    setLoader(false);
                    resetForm();
                } else {
                    toast.error(result?.message);
                }
            } catch (error) {
                setLoader(true);
                console.error("Error fetching settings:", error);
            }
        },
    });
    const whatsappphoneno = settingData?.whatsapp_phone_no?.replace(/\D/g, ""); // removes non-digits

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
                                            <img src="/assets/img/logo/finallogo.png" alt="Brand Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="widget-body">
                                    <p>
                                        We create handcrafted gold, diamond, and custom jewelry—designed to reflect timeless elegance and exceptional quality.

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
                                            <li className="d-flex align-items-start">
                                                <i className="pe-7s-home mr-2"></i>
                                                <span className='whitespace-pre-line'>
                                                    {settingData?.address}
                                                </span>
                                            </li>

                                            <li><i className="pe-7s-mail"></i> <a href={`mailto:${settingData?.email}`}>{settingData?.email}</a></li>
                                            <li><i className="fa fa-whatsapp whatsapp-icon" ></i> <a
                                                href={`https://api.whatsapp.com/send?phone=${whatsappphoneno}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{settingData?.whatsapp_phone_no}</a></li>
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
                                    <a href={settingData?.facebook_link} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href={settingData?.instagram_link} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href={settingData?.printrest_link} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-pinterest-p"></i>
                                    </a>
                                    <a href={settingData?.youtube_link} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-youtube"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter & Payment */}
                    <div className="row align-items-center mt-20">
                        <div className="col-md-6">
                            <div className="newsletter-wrapper">
                                <h6 className="widget-title-text">Stay Sparkling — Join Our Jewelry Newsletter
                                </h6>
                                <form className="newsletter-inner" onSubmit={formik.handleSubmit}>

                                    {/* <input type="email" className="news-field" id="mc-email" autoComplete="off" placeholder="Enter your email address" /> */}

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        className='news-field'
                                        autoComplete="off"
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="error-message mt-1">{formik.errors.email}</p>
                                    )}
                                    <button type="submit" className="news-btn" disabled={loader}>

                                        {loader ? "Sending..." : "Subscribe"}
                                    </button>
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
                                    &copy; {new Date().getFullYear()} <b>Bliss Platina Designs</b> Made with <i className="fa fa-heart text-danger"></i> by{' '}
                                    <a href="https://blissplatinadesigns.com" target="_blank" rel="noopener noreferrer"><b>Bliss Platina Designs</b></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
