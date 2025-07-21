"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { ChevronDown, ChevronUp } from "lucide-react";

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

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Breadcrumb pageTitle="FAQ" />
            <section className="feature-product section-padding pb-0">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">Frequently Asked Questions</h2>
                            <p className="sub-title">Explore our FAQ for common queries. Can't find your answer? Contact us via email or chat for assistance!</p>
                        </div>
                </div>

                <img src="/assets/img/faq/faq-image.png" alt="FAQ Image" />

                <div className="max-w-3xl mx-auto section-padding">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4 shadow-sm transition duration-300 bg-white main-faq"
                        >
                            <div
                                onClick={() => toggleFAQ(index)}
                                className={`d-flex align-items-center justify-content-between  ${openIndex === index ? "mb-1" : ""} cursor-pointer w-full`}
                            >
                                <h3 className="product-name">
                                    {faq.question}
                                </h3>
                                <div className={`${openIndex === index ? "faq-icon" : ""}`}>
                                    {openIndex === index ? <ChevronUp size={38} /> : <ChevronDown size={38} />}
                                </div>
                            </div>
                            {openIndex === index && (
                                
                                    <p className="faq-paragraph py-2 text-gray-700">{faq.answer}</p>
                                 
                            )}

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
