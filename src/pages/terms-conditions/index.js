"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Loader from "@/components/common/Loader";
import SEO from "@/components/common/SEO";
import { getSetting } from "@/lib/api/setting/setting";
import { useEffect, useState } from "react";

export default function TermsConditions() {
    const termsConditions = [
        {
            title: "Introduction",
            content: (
                <p>
                    By using our website (
                    <a href="https://blissplatina.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        https://blissplatina.com
                    </a>
                    ) and placing orders via WhatsApp, you agree to the following Terms and Conditions. Bliss Platina Designs may update these terms without prior notice.
                </p>
            ),
        },
        {
            title: "Product Information",
            content: (
                <p>
                    We strive to provide accurate details about our jewelry, including descriptions, pricing, and images. However, slight variations may occur due to handmade craftsmanship or screen display differences.
                </p>
            ),
        },
        {
            title: "Order Placement via WhatsApp",
            content: (
                <>
                    <p>
                        Orders must be confirmed through WhatsApp. By confirming an order, you agree to the discussed price, design, and timeline.
                    </p>
                    <p>
                        Custom-made jewelry is non-cancellable and non-refundable after order confirmation.
                    </p>
                </>
            ),
        },
        {
            title: "Pricing and Payment",
            content: (
                <>
                    <p>
                        All prices are in INR unless specified otherwise. We accept UPI, bank transfers, or any approved payment method discussed during order confirmation.
                    </p>
                    <p>
                        Full or partial advance payment may be required to process your order.
                    </p>
                </>
            ),
        },
        {
            title: "Shipping and Delivery",
            content: (
                <p>
                    Orders are shipped via trusted courier partners. Delivery timeframes depend on location and order complexity. We are not liable for delays caused by third-party services or unforeseen circumstances.
                </p>
            ),
        },
        {
            title: "Returns and Exchanges",
            content: (
                <>
                    <p>
                        We do not accept returns for customized or personalized jewelry unless the item received is damaged or incorrect.
                    </p>
                    <p>
                        Any issues must be reported within 24 hours of delivery with supporting images and order proof.
                    </p>
                </>
            ),
        },
        {
            title: "Intellectual Property",
            content: (
                <p>
                    All content, designs, and images on our website are the property of Bliss Platina Designs and cannot be copied or reproduced without permission.
                </p>
            ),
        },
        {
            title: "Limitation of Liability",
            content: (
                <p>
                    Bliss Platina Designs is not liable for any indirect or consequential damages related to the use of our website or services.
                </p>
            ),
        },
        {
            title: "Governing Law",
            content: (
                <p>
                    These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in India.
                </p>
            ),
        },
    ];
    const [settingData, setSettingData] = useState(null);
    const [loader, setLoader] = useState(false);

    const onloadSetting = async () => {
        setLoader(true);
        try {
            const result = await getSetting("terms_condition");
            if (result?.success) {
                setSettingData(result.data);
            }
        } catch (error) {
            console.error("Error fetching settings:", error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        onloadSetting();
    }, []);


    return (
        <>
            <SEO
                title="Terms & Conditions"
                description="Read the terms and conditions for shopping on our jewelry site, including payments, returns, and disclaimers."
            />

            <Breadcrumb pageTitle="Terms and Conditions" />

            <section className="policy-section py-5">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-12">
                            {termsConditions.map((section, index) => (
                                <div key={index} className="policy-list">
                                    <h3 className="policy-title">{section.title}</h3>
                                    {section.content}
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-12">
                            {loader ? (
                                <div className="d-flex justify-content-center align-items-center py-5">
                                    <Loader />
                                </div>
                            ) : settingData ? (
                                <div
                                    className="policy-title"
                                    dangerouslySetInnerHTML={{ __html: settingData }}
                                />
                            ) : (
                                <p className="policy-list d-flex justify-content-center align-items-center">No terms available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .policy-title h3 {
          font-size: 24px;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #222222; /* Bootstrap text-dark */
              line-height: 1.2;
        } 
        .policy-title p {
          font-size: 14px;
          color: #555555; /* Bootstrap text-secondary */
          margin-bottom: 8px;
          line-height: 1.7;
        }
        .policy-title a {
          color: #c29958; /* Bootstrap primary */
          text-decoration: none;
        }
        .policy-title a:hover {
          text-decoration: underline;
        }
      `}</style>
        </>
    );
}
