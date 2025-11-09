"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Loader from "@/components/common/Loader";
import SEO from "@/components/common/SEO";
import { getSetting } from "@/lib/api/setting/setting";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
    const policySections = [
        {
            title: "Who We Are",
            content: (
                <p>
                    Bliss Platina Design is a trusted jewelry brand specializing in handcrafted gold and diamond jewelry. Our website address is{" "}
                    <a href="https://blissplatina.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        https://blissplatina.com
                    </a>. We serve our customers primarily through personalized WhatsApp communication and online browsing experiences.
                </p>
            ),
        },
        {
            title: "What Personal Data We Collect and Why",
            content: (
                <>
                    <p>
                        When you place an order or contact us via WhatsApp or our website, we collect information such as your name, contact number, address, and jewelry preferences. This data is used strictly for processing your orders and offering a seamless customer experience.
                    </p>
                    <p>
                        We may also collect non-personal data like IP address and browser information to analyze site traffic and improve usability.
                    </p>
                </>
            ),
        },
        {
            title: "WhatsApp Communication",
            content: (
                <>
                    <p>
                        All purchases and customer support are primarily handled through WhatsApp. When you message us, your phone number and chat history are stored for order management and service reference.
                    </p>
                    <p>
                        We do not share your WhatsApp details with any third-party marketing platforms or unrelated services.
                    </p>
                </>
            ),
        },
        {
            title: "Media",
            content: (
                <p>
                    If you send us images for customized jewelry or design references via WhatsApp or forms, please ensure no sensitive metadata (like location data) is embedded. We do not intentionally extract or use such data.
                </p>
            ),
        },
        {
            title: "Cookies",
            content: (
                <>
                    <p>
                        Our website uses basic cookies to improve your experience, such as remembering your browsing preferences or language settings.
                    </p>
                    <p>
                        These cookies do not store any sensitive personal data and can be disabled via your browser settings without affecting core browsing functionality.
                    </p>
                </>
            ),
        },
        {
            title: "Embedded Content from Other Platforms",
            content: (
                <>
                    <p>
                        Pages on our website may include embedded content like Instagram posts, YouTube videos, or third-party design tools.
                    </p>
                    <p>
                        These platforms may collect data about you, use cookies, and track your interaction with the embedded content, just as if you visited their site directly.
                    </p>
                </>
            ),
        },
        {
            title: "How Long We Retain Your Data",
            content: (
                <>
                    <p>
                        Data from customer inquiries and WhatsApp chats is retained for as long as necessary to manage your order history and support requests.
                    </p>
                    <p>
                        We may keep records securely to improve our customer service or as required by applicable legal obligations.
                    </p>
                </>
            ),
        },
        {
            title: "Your Rights Over Your Data",
            content: (
                <p>
                    You have the right to request access to, correction of, or deletion of any personal data we hold. If you wish to update or remove your details, you can contact us directly through our official WhatsApp or email.
                </p>
            ),
        },
        {
            title: "Data Sharing and Security",
            content: (
                <>
                    <p>
                        We do not sell or trade your personal data. Your information is only shared with trusted delivery or service partners when required to fulfill your orders.
                    </p>
                    <p>
                        All personal information is handled with care and protected using standard security measures.
                    </p>
                </>
            ),
        },
        {
            title: "Where We Send Your Data",
            content: (
                <p>
                    Messages or inquiries submitted through our website forms may be processed through automated spam detection services to protect the platform from abuse.
                </p>
            ),
        },
    ];

    const [settingData, setSettingData] = useState(null);
    const [loader, setLoader] = useState(false);


    const onloadSetting = async () => {
        setLoader(true);
        try {
            const result = await getSetting(
                "privacy_policy"
            );
            if (result?.success) {
                setSettingData(result.data);
                setLoader(false);
            }
        } catch (error) {
            setLoader(true);
            console.error("Error fetching settings:", error);
        }
    };

    useEffect(() => {
        onloadSetting();
    }, []);

    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Learn how we collect, use, and protect your personal data when you browse or purchase from our jewelry website."
            />
            <Breadcrumb pageTitle="Privacy Policy" />
            <section className="policy-section py-5">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-12">
                            {policySections.map((section, index) => (
                                <div key={index} className="policy-list">
                                    <h3 className="policy-title">{section.title}</h3>
                                    {section.content}
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="policy-list">
                                {loader ? <div className="d-flex justify-content-center align-items-center">
                                    <Loader />
                                </div> :

                                    <div
                                        className="policy-title"
                                        dangerouslySetInnerHTML={{ __html: settingData }} />
                                }
                            </div>
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
          .policy-title ul {
           padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.policy-title li {
  margin-bottom: 0.5rem;
    list-style-type: disc;
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
