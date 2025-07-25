"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "@/components/common/SEO";

export default function FAQPage() {
    const faqs = [
        {
            question: "What is the difference between 18KT and 22KT gold?",
            answer: "18KT gold contains 75% pure gold and is mixed with other metals for durability, making it ideal for jewelry. 22KT contains around 91.6% pure gold and is softer, more suitable for plain gold jewelry.",
        },
        {
            question: "Are your diamonds certified?",
            answer: "Yes, all our diamonds come with certification from reputed gemological laboratories like IGI or GIA ensuring authenticity and quality.",
        },
        {
            question: "Do you offer customization on jewelry?",
            answer: "Absolutely! You can customize designs, metal type (white gold, rose gold, platinum), gemstone choice, and engraving to make your jewelry unique.",
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 15-day return window for unused and undamaged jewelry with original packaging and certificates. Custom items are non-returnable.",
        },
        {
            question: "How do I find my ring size?",
            answer: "Use our online ring size guide or visit your nearest jeweler. You can also contact us, and we’ll help you find the perfect fit.",
        },
        {
            question: "Is your jewelry hallmarked?",
            answer: "Yes, all our gold jewelry is BIS hallmarked, and diamond jewelry comes with stone certifications.",
        },
    ];

    const [openId, setOpenId] = useState(null);

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
                            Explore our FAQ for common queries. Can&rsquo;t find your answer? Contact us via email or chat for assistance!
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="section-padding pt-0">
                        <div className="checkoutaccordion" id="checkOutAccordion">
                            <div className="card">
                                {faqs.map((faq, index) => {
                                    const collapseId = `logInaccordion-${index}`;
                                    return (
                                        <div className="px-3" key={index}>
                                            <div className="border-faq rounded-lg transition duration-300 bg-white main-faq">
                                                <div
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${collapseId}`}
                                                    className="d-flex align-items-center justify-content-between py-3 cursor-pointer w-full"
                                                >
                                                    <h4 className="product-name">{faq.question}</h4>
                                                    <div>
                                                        {openId === collapseId ? <ChevronUp size={38} /> : <ChevronDown size={38} />}
                                                    </div>
                                                </div>
                                                <div
                                                    id={collapseId}
                                                    className="collapse accordion-collapse"
                                                    data-bs-parent="#checkOutAccordion"
                                                >
                                                    <p className="faq-paragraph py-2 text-gray-700">{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
