"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Loader from "@/components/common/Loader";
import SEO from "@/components/common/SEO";
import { getFaq } from "@/lib/api/faq/faq";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FAQPage() {
    // const faqs = [
    //     {
    //         question: "What’s the difference between 18KT and 22KT gold?",
    //         answer:
    //             "18KT gold contains 75% pure gold and is more durable, making it ideal for diamond and gemstone-studded jewelry. 22KT gold, with 91.6% purity, is softer and typically used for plain gold jewelry."
    //     },
    //     {
    //         question: "Are your diamonds certified?",
    //         answer:
    //             "Yes. At Bliss Platina Design, every diamond we use is certified by renowned gemological labs such as IGI or GIA, ensuring quality, authenticity, and transparency."
    //     },
    //     {
    //         question: "Can I customize my jewelry?",
    //         answer:
    //             "Absolutely! We offer full customization including design, metal type (yellow gold, rose gold, white gold, platinum), diamond size & quality, gemstones, and engraving. Contact us via WhatsApp to begin your custom piece."
    //     },
    //     {
    //         question: "How do I place an order via WhatsApp?",
    //         answer:
    //             "Simply send us the product image or code on WhatsApp. Our team will guide you through customization options, pricing, and order confirmation. It’s fast, simple, and personalized!"
    //     },
    //     {
    //         question: "What is your return and exchange policy?",
    //         answer:
    //             "We offer a 15-day return or exchange for unused, undamaged jewelry in its original packaging with all tags and certificates. Please note: customized pieces are not eligible for return. Contact us on WhatsApp for return support."
    //     },
    //     {
    //         question: "Is your jewelry hallmarked?",
    //         answer:
    //             "Yes. All gold jewelry from Bliss Platina Design is BIS hallmarked, guaranteeing purity. Diamond and gemstone pieces are also certified to ensure quality and authenticity."
    //     },
    //     {
    //         question: "How do I know my ring size?",
    //         answer:
    //             "You can use our online ring size chart or visit a nearby jeweler. Not sure? Message us on WhatsApp and we’ll help you determine your perfect size with easy instructions."
    //     }
    // ];

    const [openId, setOpenId] = useState(null);
    const [faqsData, setFaqsData] = useState(null);
    const [loader, setLoader] = useState(false);



    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleShown = (e) => setOpenId(e.target.id);
            const handleHidden = (e) => setOpenId(null);

            const items = document.querySelectorAll(".accordion-collapse");
            items.forEach((item) => {
                item.addEventListener("shown.bs.collapse", handleShown);
                item.addEventListener("hidden.bs.collapse", handleHidden);
            });

            return () => {
                items.forEach((item) => {
                    item.removeEventListener("shown.bs.collapse", handleShown);
                    item.removeEventListener("hidden.bs.collapse", handleHidden);
                });
            };
        }
    }, []);

    useEffect(() => {
        onloadSetting();
    }, []);

    const onloadSetting = async () => {
        setLoader(true);
        try {
            const result = await getFaq();
            if (result?.success) {
                setFaqsData(result.data);
                setLoader(false);
            }
        } catch (error) {
            setLoader(true);
            console.error("Error fetching settings:", error);
        }
    };



    return (
        <>
            <SEO
                title="FAQs"
                description="Find answers to frequently asked questions about jewelry care, returns, shipping, custom orders, and more."
            />
            <Breadcrumb pageTitle="FAQ" />
            <section className="feature-product section-padding pb-0">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2 className="title">Frequently Asked Questions</h2>
                        <p className="sub-title">
                            Have questions about our jewelry, customization, or orders? Explore our FAQs below or chat with us directly on WhatsApp for personal assistance.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="section-padding pt-0">
                        <div className="checkoutaccordion" id="checkOutAccordion">
                            {loader ? (
                                <div className="d-flex justify-content-center align-items-center">
                                    <Loader />
                                </div>
                            ) : (
                                <div className="card">
                                    {faqsData?.map((faq, index) => {
                                        const collapseId = `logInaccordion-${index}`;
                                        return (
                                            <div className="px-3" key={index}>
                                                <div className="border-faq rounded-lg transition duration-300 bg-white main-faq">
                                                    <div
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        className="d-flex align-items-center justify-content-between py-3 cursor-pointer w-full"
                                                        onClick={() => setOpenId(openId === collapseId ? null : collapseId)}
                                                    >
                                                        <h4 className="product-name">{faq.question}</h4>
                                                        <div>
                                                            {openId === collapseId ? (
                                                                <ChevronUp size={38} />
                                                            ) : (
                                                                <ChevronDown size={38} />
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div
                                                        id={collapseId}
                                                        className={`collapse accordion-collapse ${openId === collapseId ? "show" : ""
                                                            }`}
                                                        data-bs-parent="#checkOutAccordion"
                                                    >
                                                        <p className="faq-paragraph py-2 text-gray-700">{faq.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
