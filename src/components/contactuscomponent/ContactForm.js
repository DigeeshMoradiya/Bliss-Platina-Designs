'use client';

import { storeSubscribe } from "@/lib/api/setting/setting";
import { useFormik } from "formik";
import { useState } from "react";
import { useToast } from "vyrn";
import * as Yup from 'yup';

export default function ContactForm({ settingData }) {
    const toast = useToast();
    const [loader, setLoader] = useState(false);


    const formik = useFormik({
        initialValues: {
            first_name: "",
            phone: "",
            email_address: "",
            contact_subject: "",
            message: "",
        },

        validationSchema: Yup.object({
            first_name: Yup.string().required("Name is required"),
            phone: Yup.string()
                .matches(/^[0-9]+$/, "Phone number must be only digits")
                .required("Phone is required"),
            email_address: Yup.string().email("Invalid email").required("Email is required"),
            contact_subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            const payload = {
                first_name: values?.first_name,
                phone: values?.phone,
                email_address: values?.email_address,
                contact_subject: values?.contact_subject,
                message: values?.message,
            }
            setLoader(true);
            try {
                const result = await storeSubscribe("contactus", payload);
                if (result?.success === true) {
                    toast.success(result?.message);
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
    return (
        <div className="contact-area section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-message">
                            <h4 className="contact-title">Tell Us Your Project</h4>
                            <form onSubmit={formik.handleSubmit} className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input
                                            name="first_name"
                                            placeholder="Name *"
                                            type="text"
                                            value={formik.values.first_name}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.first_name && formik.errors.first_name && (
                                            <p className="error-message">{formik.errors.first_name}</p>
                                        )}
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input
                                            name="phone"
                                            placeholder="Phone *"
                                            type="text"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.phone && formik.errors.phone && (
                                            <p className="error-message mt-1">{formik.errors.phone}</p>
                                        )}
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input
                                            name="email_address"
                                            placeholder="Email *"
                                            type="text"
                                            value={formik.values.email_address}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.email_address && formik.errors.email_address && (
                                            <p className="error-message">{formik.errors.email_address}</p>
                                        )}
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input
                                            name="contact_subject"
                                            placeholder="Subject *"
                                            type="text"
                                            value={formik.values.contact_subject}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.contact_subject && formik.errors.contact_subject && (
                                            <p className="error-message">{formik.errors.contact_subject}</p>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <div className="contact2-textarea mb-4">
                                            <textarea
                                                name="message"
                                                placeholder="Message *"
                                                className="form-control2"
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.message && formik.errors.message && (
                                                <p className="error-message">{formik.errors.message}</p>
                                            )}
                                        </div>
                                        <div className="contact-btn">
                                            <button className="btn btn-sqr" type="submit" disabled={loader}>
                                                {loader ? "Sending..." : "Send Message"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-info">
                            <h4 className="contact-title">Contact Us</h4>
                            <p>Have a question about our jewelry, custom orders, or need assistance with your purchase? We’re here to help! Reach out to Bliss Platine Design via WhatsApp, email, or our live chat — our team will be happy to assist you with anything you need.
                            </p>
                            <ul>
                                <li><i className="fa fa-fax"></i> Address : {settingData?.address}</li>
                                <li><i className="fa fa-envelope-o"></i> E-mail: {settingData?.email}</li>
                                <li><i className="fa fa-phone"></i> {settingData?.phone_no}</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
