import Link from "next/link";
import Breadcrumb from "./common/Breadcrumb";
import SEO from "./common/SEO";
import ContactForm from "./contactuscomponent/ContactForm";
import { useState } from "react";
import { X } from "lucide-react"; // or use any icon library

export default function CustomDesign() {
    const [images, setImages] = useState([]);

    const handleFiles = (files) => {
        const selectedImages = Array.from(files).map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setImages((prev) => [...prev, ...selectedImages]);
    };

    const handleInputChange = (e) => {
        handleFiles(e.target.files);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const removeImage = (indexToRemove) => {
        setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    const policies = [
        {
            icon: "/assets/img/custom-design/Customer Service.png",
            title: '24/7 Customer Service',
            description: 'Free shipping all order',
        },
        {
            icon: "/assets/img/custom-design/Bliss Platina’s Trust.png",
            title: 'Bliss Platina’s Trust',
            description: 'Support 24 hours a day',
        },
        {
            icon: "/assets/img/custom-design/Unbeatable Market Price.png",
            title: 'Unbeatable Market Price',
            description: '30 days for free return',
        },
        {
            icon: "/assets/img/custom-design/Eco Friendly Element.png",
            title: 'Eco Friendly Element',
            description: 'We ensure secure payment',
        },
    ];


    return (
        <>
            <SEO
                title="Custom Design"
                description="Learn more about our jewelry store, our mission, and our commitment to quality."
                keywords="about, jewelry, gold, diamond, company"
            />
            <Breadcrumb pageTitle="Custom Design" />
            <section className="feature-product section-padding pb-0">
                <div className="col-12">
                    <div className="section-title text-center col-lg-7 m-auto">
                        <h2 className="title">Design Your Own Engagement Ring</h2>
                        <p className="sub-title m-auto">Design your unique jewelry with Bliss Platina. Tailor every detail to your taste for a truly personal touch. Create the one-of-a-kind piece you've always dreamed of.</p>
                    </div>
                </div>
            </section>

            <section className="checkout-page-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <div className="row">
                                <div className="col-lg-7 m-auto"> */}
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label htmlFor="f_name" className="required">First Name</label>
                                            <input type="text" id="f_name" placeholder="First Name" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label htmlFor="l_name" className="required">Last Name</label>
                                            <input type="text" id="l_name" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label for="email" className="required">Email Address</label>
                                            <input type="email" id="email" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label for="phone" className="required">Phone Number</label>
                                            <input type="tel" id="phone" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                </div>



                                <div className="single-input-item">
                                    <label htmlFor="country" className="required">What are you looking to design?</label>
                                    <select name="country nice-select" id="country">
                                        <option value="">Select an option</option>
                                        <option value="Engagement/Special Occasion Ring">Engagement/Special Occasion Ring</option>
                                        <option value="Wedding/Anniversary Band">Wedding/Anniversary Band</option>
                                        <option value="Wedding Set">Wedding Set</option>
                                        <option value="Earrings">Earrings</option>
                                        <option value="Necklace/Pendant">Necklace/Pendant</option>
                                        <option value="Bracelet/Bangle">Bracelet/Bangle</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="single-input-item">
                                    <label htmlFor="stonetype" className="required mt-3">Choose your stone type</label>
                                    <select name="stonetype nice-select" id="stonetype">
                                        <option value="">Select an option</option>
                                        <option value="Natural Stone">Natural Stone</option>
                                        <option value="Lab Grown Stone">Lab Grown Stone</option>
                                        <option value="Moissanite">Moissanite</option>
                                        <option value="Gamestone">Gamestone</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="stonetype" className="required mt-3">What center stone shape would you like?</label>
                                    <select name="stonetype nice-select" id="stonetype">
                                        <option value="">Select an option</option>
                                        <option value="Natural Stone">Round</option>
                                        <option value="Lab Grown Stone">Oval</option>
                                        <option value="Moissanite">Cushion</option>
                                        <option value="Gamestone">Princess</option>
                                        <option value="Gamestone">Radiant</option>
                                        <option value="Gamestone">Emerald</option>
                                        <option value="Gamestone">Marquise</option>
                                        <option value="Gamestone">Pear</option>
                                        <option value="Gamestone">Asscher</option>
                                        <option value="Gamestone">Heart</option>
                                        <option value="Gamestone">Rose Cut</option>
                                        <option value="Gamestone">Old European Cut</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="country" className="required mt-3">What centre stone carat weight are you interested in?</label>
                                    <select name="country nice-select" id="country">
                                        <option value="">Select an option</option>
                                        <option value="0.5">0.5</option>
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        <option value="2.5">2.5</option>
                                        <option value="3">3</option>
                                        <option value="3.5">3.5</option>
                                        <option value="4">4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="5">5</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="country" className="required mt-3">What metal type would you like?
                                    </label>
                                    <select name="country nice-select" id="country">
                                        <option value="">Select an option</option>
                                        <option value="Platinum">Platinum</option>
                                        <option value="18k White Gold">18k White Gold</option>
                                        <option value="18K Yellow Gold">18K Yellow Gold</option>
                                        <option value="18k Rose Gold">18k Rose Gold</option>
                                        <option value="14k White Gold">14k White Gold</option>
                                        <option value="14K Yellow Gold">14K Yellow Gold</option>
                                        <option value="14k Rose Gold">14k Rose Gold</option>
                                        <option value="10k White Gold">10k White Gold</option>
                                        <option value="10K Yellow Gold">10K Yellow Gold</option>
                                        <option value="10k Rose Gold">10k Rose Gold</option>
                                        <option value="925 Sterling Silver">925 Sterling Silver</option>
                                        <option value="Two-Toned">Two-Toned</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="budget" className="required mt-3">What’s your approximate budget?</label>
                                    <select name="country nice-select" id="country">
                                        <option value="">Select an option</option>
                                        <option value="Below $800">Below $800</option>
                                        <option value="$800-$1199">$800-$1199</option>
                                        <option value="$1200-$1999">$1200-$1999</option>
                                        <option value="$2000-$2999">$2000-$2999</option>
                                        <option value="$3000-$3999">$3000-$3999</option>
                                        <option value="$4000-$4999">$4000-$4999</option>
                                        <option value="$5000-$7499">$5000-$7499</option>
                                        <option value="$7500-$9999">$7500-$9999</option>
                                        <option value="$10k+">$10k+</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="ordernote" className="mt-3">Tell us about your vision.</label>
                                    <textarea name="ordernote" id="ordernote" cols="30" rows="3" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>

                                <div className="upload-box d-flex flex-column justify-content-center align-items-center mt-3" onDrop={handleDrop}
                                    onDragOver={handleDragOver}>
                                    <img src="/assets/img/custom-design/upload-icon.png" alt="Upload Icon" className="upload-icon" />
                                    <input type="file" id="file-upload" className="file-upload" multiple hidden accept="image/*"
                                        onChange={handleInputChange} />
                                    <label htmlFor="file-upload" className="file-upload-label cursor-pointer mt-2">Upload Reference Images</label>
                                </div>
                                {images.length > 0 && (
                                    <div className="mt-4 d-flex flex-wrap gap-3">
                                        {images.map((img, index) => (
                                            <div
                                                key={index}
                                                className="img-container position-relative"
                                                style={{ width: "100px", height: "100px" }}
                                            >
                                                <img
                                                    src={img.url}
                                                    alt={`upload-${index}`}
                                                    className="img-thumbnail"
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                />
                                                <button
                                                    onClick={() => removeImage(index)}
                                                    className="removeicon"
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="action_link d-flex justify-content-center mt-5">
                                    <button className="btn btn-cart2" >Submit</button>
                                </div>
                            </form>
                        </div>
                        {/* </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="feature-product section-padding pt-0">
                <div className="hero-single-slide hero-overlay">
                    <div className="hero-slider-item bg-img"
                        style={{ backgroundImage: "url('/assets/img/custom-design/find-size.png')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero-slider-content slide-1">
                                        <h2 className="slide-title"><span>Find Your Ring Size</span></h2>
                                        <h4 className="slide-desc">Unsure of Your Ring Size? No Problem!
                                            <br /> Click on 'Find Now' and let us assist you in choosing the right ring size for you.</h4>
                                        <div className="d-flex gap-3">
                                            <Link href="/shop" className="btn btn-hero">Print Now</Link>
                                            <Link href="/find-size" className="btn btn-find-now">Find Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="feature-product section-padding pt-0">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2 className="title">Bliss Platina’s Promise</h2>
                        <p className="sub-title">How We’re Distinct From Others!
                        </p>
                    </div>
                </div>
                <div className="service-policy section-padding-service pb-0">
                    <div className="container">
                        <div className="row mtn-30">
                            {policies.map((item, i) => (
                                <div className="col-lg-3 col-md-3" key={i}>
                                    <div className="single-choose-item text-center mb-30">
                                        <img src={item.icon} alt={item.title} />
                                        <h6 className="mt-3">{item.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <img src="/assets/img/custom-design/Section.png" alt="Policy Background" className="img-fluid" />
            <section className="feature-product section-padding pb-0">
                <div className="container">
                    <div className="row mtn-30">
                        <div className="section-title text-center">
                            <h2 className="title mb-3">Why To Buy Custom Engagement Ring?</h2>
                            <p className="sub-title">The custom engagement rings has more sentiments and attachments then the premade rings, which are specially made only for you, so it's like one of a kind. Diamondrensu allows users to get their dream engagement ring by allowing 100% customization and design your own engagement ring your way. Viewers can submit the details on the form above, including the reference or inspiration images, and we can make the same design for you. We can custom made engagement rings in any shape, size, and color of lab grown diamonds, moissanite, or other gemstones. For custom orders Diamondrensu specializes in lab grown diamond engagement rings, moissanite engagement rings, stud earrings, moissanite wedding bands, bracelets and many more. If you have questions or would like an expert opinion feel free to schedule a virtual appointment with us.
                            </p>
                            <p className="sub-title">Customized Diamond Rings are specially made by experienced craftsmen, with perfection and high quality finishing. Design your own rings with Diamondrensu and get one of a kind ring which will be made by you for you and your loved ones. Diamondrensu not only makes custom engagement rings but we also make custom moissanite earrings which are very useful for gifting purposes.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}