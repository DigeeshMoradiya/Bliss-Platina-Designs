import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import * as Yup from 'yup';
import Breadcrumb from "./common/Breadcrumb";
import SEO from "./common/SEO";




export default function CustomDesign() {

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

    const designOptions = [
        { value: "", label: "Select an option" },
        { value: "Engagement/Special Occasion Ring", label: "Engagement/Special Occasion Ring" },
        { value: "Wedding/Anniversary Band", label: "Wedding/Anniversary Band" },
        { value: "Wedding Set", label: "Wedding Set" },
        { value: "Earrings", label: "Earrings" },
        { value: "Necklace/Pendant", label: "Necklace/Pendant" },
        { value: "Bracelet/Bangle", label: "Bracelet/Bangle" },
        { value: "Other", label: "Other" }
    ];

    const stoneOptions = [
        { value: "", label: "Select an option" },
        { value: "Natural Stone", label: "Natural Stone" },
        { value: "Lab Grown Stone", label: "Lab Grown Stone" },
        { value: "Moissanite", label: "Moissanite" },
        { value: "Gamestone", label: "Gamestone" },
        { value: "Other", label: "Other" }
    ];

    const shapeOptions = [
        { value: "", label: "Select an option" },
        { value: "Round", label: "Round" },
        { value: "Oval", label: "Oval" },
        { value: "Cushion", label: "Cushion" },
        { value: "Princess", label: "Princess" },
        { value: "Radiant", label: "Radiant" },
        { value: "Emerald", label: "Emerald" },
        { value: "Marquise", label: "Marquise" },
        { value: "Pear", label: "Pear" },
        { value: "Asscher", label: "Asscher" },
        { value: "Heart", label: "Heart" },
        { value: "Rose Cut", label: "Rose Cut" },
        { value: "Old European Cut", label: "Old European Cut" },
        { value: "Other", label: "Other" },
    ];

    const caratOptions = [
        { value: "", label: "Select an option" },
        { value: "0.5", label: "0.5" },
        { value: "1", label: "1" },
        { value: "1.5", label: "1.5" },
        { value: "2", label: "2" },
        { value: "2.5", label: "2.5" },
        { value: "3", label: "3" },
        { value: "3.5", label: "3.5" },
        { value: "4", label: "4" },
        { value: "4.5", label: "4.5" },
        { value: "5", label: "5" },
        { value: "Other", label: "Other" },
    ];

    const metalOptions = [
        { value: "", label: "Select an option" },
        { value: "Platinum", label: "Platinum" },
        { value: "18k White Gold", label: "18k White Gold" },
        { value: "18K Yellow Gold", label: "18K Yellow Gold" },
        { value: "18k Rose Gold", label: "18k Rose Gold" },
        { value: "14k White Gold", label: "14k White Gold" },
        { value: "14K Yellow Gold", label: "14K Yellow Gold" },
        { value: "14k Rose Gold", label: "14k Rose Gold" },
        { value: "10k White Gold", label: "10k White Gold" },
        { value: "10K Yellow Gold", label: "10K Yellow Gold" },
        { value: "10k Rose Gold", label: "10k Rose Gold" },
        { value: "925 Sterling Silver", label: "925 Sterling Silver" },
        { value: "Two-Toned", label: "Two-Toned" },
        { value: "Other", label: "Other" },
    ];

    const budgetOptions = [
        { value: "", label: "Select an option" },
        { value: "Below $800", label: "Below $800" },
        { value: "$800-$1199", label: "$800-$1199" },
        { value: "$1200-$1999", label: "$1200-$1999" },
        { value: "$2000-$2999", label: "$2000-$2999" },
        { value: "$3000-$3999", label: "$3000-$3999" },
        { value: "$4000-$4999", label: "$4000-$4999" },
        { value: "$5000-$7499", label: "$5000-$7499" },
        { value: "$7500-$9999", label: "$7500-$9999" },
        { value: "$10k+", label: "$10k+" },
        { value: "Other", label: "Other" },
    ];


    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? '#c29958' : '#ccc',
            backgroundColor: "#f7f7f7",
            borderRadius: "0px",
            height: "48px",
            boxShadow: 'none',
            '&:hover': {
                borderColor: state.isFocused ? '#c29958' : '#ccc',
            },
        }),
        singleValue: (base) => ({
            ...base,
            color: '#555555',
        }),
        placeholder: (base) => ({
            ...base,
            color: '#570000',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: 'white',
            fontSize: '13px',
            minHeight: '34px',
            textTransform: 'capitalize',
            borderRadius: '10px',

        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#f4f2f2' : 'white',
            color: '#555555',
            fontWeight: state.isSelected ? 'bold' : 'normal',
            cursor: 'pointer',
            borderRadius: '0px',
            '&:active': {
                backgroundColor: '#f4f2f2',
            },
            '&:hover': {
                backgroundColor: '#f4f2f2',
            },
        }),
        input: (base) => ({
            ...base,
            color: 'black',
        }),
    };

    const fileInputRef = useRef(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const formik = useFormik({
        initialValues: {
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            countryCode: '',
            design: "",
            stonetype: "",
            shape: "",
            carat: "",
            metal: "",
            budget: "",
            ordernote: "",
            images: [],
            othercontain: "",
            othercontainStoneType: "",
            othercontainShape: "",
            othercontaincarat: "",
            othercontainmetal: "",
            othercontainbudget: "",
        },

        validationSchema: Yup.object({
            f_name: Yup.string().required("First name is required"),
            l_name: Yup.string().required("Last name is required"),
            email: Yup.string().email("Please enter a valid email address").required("Email is required"),
            phone: Yup.string()
                .required("Phone number is required")
                .test('valid-phone', 'Invalid phone number', function (value) {
                    const { countryCode } = this.parent;
                    if (!value || !countryCode) return false;

                    const phone = value.replace(/[^0-9]/g, '');
                    const localNumber = phone.replace(countryCode, '');

                    switch (countryCode) {
                        case '91': // India
                            return localNumber.length === 10;
                        case '1': // US
                            return localNumber.length === 10;
                        case '44': // UK
                            return localNumber.length === 10;
                        default:
                            return localNumber.length >= 6 && localNumber.length <= 14;
                    }
                }),
            countryCode: Yup.string().required(),
            design: Yup.string().required("Please select a design option"),
            stonetype: Yup.string().required("Please select a stone type"),
            shape: Yup.string().required("Please select a stone shape"),
            carat: Yup.string().required("Please select a carat weight"),
            metal: Yup.string().required("Please select a metal type"),
            budget: Yup.string().required("Please select your budget"),
            ordernote: Yup.string().required("Please enter about"),
            othercontain: Yup.string().when("design", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom design"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainStoneType: Yup.string().when("stonetype", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom stone type"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainShape: Yup.string().when("shape", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom shape"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontaincarat: Yup.string().when("carat", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom carat"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainmetal: Yup.string().when("metal", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom metal"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainbudget: Yup.string().when("budget", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom budget"),
                otherwise: (schema) => schema.notRequired(),
            }),
        }),
        onSubmit: async (values) => {
            console.log('Submitted values:', values);

        },
    });


    const handleFiles = (files) => {
        const selectedImages = Array.from(files).map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        formik.setFieldValue("images", [...formik.values.images, ...selectedImages]);
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
        const updatedImages = formik.values.images.filter((_, index) => index !== indexToRemove);
        formik.setFieldValue("images", updatedImages);
    };

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
                        <p className="sub-title m-auto">Design your unique jewelry with Bliss Platina. Tailor every detail to your taste for a truly personal touch. Create the one-of-a-kind piece you&rsquo;ve always dreamed of.</p>
                    </div>
                </div>
            </section>

            <section className="checkout-page-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <div className="row">
                                <div className="col-lg-7 m-auto"> */}

                            <form onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label className="required">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                name="f_name"
                                                value={formik.values.f_name}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        {formik.touched.f_name && formik.errors.f_name && (
                                            <p className="error-message mt-1">{formik.errors.f_name}</p>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label htmlFor="l_name" className="required">Last Name</label>
                                            <input
                                                type="text"
                                                id="l_name"
                                                name="l_name"
                                                placeholder="Last Name"
                                                value={formik.values.l_name}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        {formik.touched.l_name && formik.errors.l_name && (
                                            <p className="error-message mt-1">{formik.errors.l_name}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label htmlFor="email" className="required">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        {formik.touched.email && formik.errors.email && (
                                            <p className="error-message mt-1">{formik.errors.email}</p>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input-item">
                                            <label htmlFor="phone" className="required">Phone Number</label>
                                            <PhoneInput
                                                country={'in'}
                                                value={formik.values.phone}
                                                onChange={(value, data) => {
                                                    formik.setFieldValue('phone', value);
                                                    formik.setFieldValue('countryCode', data.dialCode);
                                                }}
                                                inputProps={{
                                                    name: 'phone',
                                                    onBlur: formik.handleBlur,
                                                }}
                                                enableSearch
                                            />
                                        </div>
                                        {formik.touched.phone && formik.errors.phone && (
                                            <p className="error-message mt-1">{formik.errors.phone}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="design" className="required">What are you looking to design?</label>
                                    <Select
                                        options={designOptions}
                                        name="design"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={stoneOptions.find(option => option.value === formik.values.design)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('design', selectedOption.value);
                                            if (selectedOption.value !== "Other") {
                                                formik.setFieldValue("othercontain", "");
                                            }
                                        }}



                                        onBlur={formik.handleBlur}
                                    />

                                    {formik.touched.design && formik.errors.design && (
                                        <p className="error-message mt-1">{formik.errors.design}</p>
                                    )}

                                    {formik.values.design === "Other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontain"
                                                name="othercontain"
                                                placeholder="Custom Design"
                                                className="mt-3"
                                                value={formik.values.othercontain}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontain && formik.errors.othercontain && (
                                                <p className="error-message mt-1">{formik.errors.othercontain}</p>
                                            )}
                                        </>
                                    )}
                                </div>


                                <div className="single-input-item">
                                    <label htmlFor="stonetype" className="required">Choose your stone type</label>
                                    <Select
                                        options={stoneOptions}
                                        name="stonetype"
                                        classNamePrefix="custom"
                                        styles={customStyles} // Optional custom styles
                                        value={stoneOptions.find(option => option.value === formik.values.stonetype)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('stonetype', selectedOption.value);
                                            if (selectedOption.value !== "Other") {
                                                formik.setFieldValue("othercontainStoneType", "");
                                            }
                                        }}

                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.stonetype && formik.errors.stonetype && (
                                        <p className="error-message mt-1">{formik.errors.stonetype}</p>
                                    )}
                                    {formik.values.stonetype === "Other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainStoneType"
                                                name="othercontainStoneType"
                                                placeholder="Custom Stone Type"
                                                className="mt-3"
                                                value={formik.values.othercontainStoneType}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainStoneType && formik.errors.othercontainStoneType && (
                                                <p className="error-message mt-1">{formik.errors.othercontainStoneType}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="shape" className="required">What center stone shape would you like?</label>
                                    <Select
                                        options={shapeOptions}
                                        name="shape"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={shapeOptions.find(opt => opt.value === formik.values.shape)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('shape', selectedOption.value);
                                            if (selectedOption.value !== "Other") {
                                                formik.setFieldValue("othercontainShape", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.shape && formik.errors.shape && (
                                        <p className="error-message mt-1">{formik.errors.shape}</p>
                                    )}

                                    {formik.values.shape === "Other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainShape"
                                                name="othercontainShape"
                                                placeholder="Custom Shape"
                                                className="mt-3"
                                                value={formik.values.othercontainShape}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainShape && formik.errors.othercontainShape && (
                                                <p className="error-message mt-1">{formik.errors.othercontainShape}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="carat" className="required">What centre stone carat weight are you interested in?</label>
                                    <Select
                                        options={caratOptions}
                                        name="carat"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={caratOptions.find(opt => opt.value === formik.values.carat)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('carat', selectedOption.value);
                                            if (selectedOption.value !== "Other") {
                                                formik.setFieldValue("othercontaincarat", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.carat && formik.errors.carat && (
                                        <p className="error-message mt-1">{formik.errors.carat}</p>
                                    )}
                                    {formik.values.carat === "Other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontaincarat"
                                                name="othercontaincarat"
                                                placeholder="Custom Carat"
                                                className="mt-3"
                                                value={formik.values.othercontaincarat}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontaincarat && formik.errors.othercontaincarat && (
                                                <p className="error-message mt-1">{formik.errors.othercontaincarat}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="metal" className="required">What metal type would you like?</label>
                                    <Select
                                        options={metalOptions}
                                        name="metal"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={metalOptions.find(opt => opt.value === formik.values.metal)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('metal', selectedOption.value);
                                            if (selectedOption.value !== "Other") {
                                                formik.setFieldValue("othercontainmetal", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.metal && formik.errors.metal && (
                                        <p className="error-message mt-1">{formik.errors.metal}</p>
                                    )}
                                    {formik.values.metal === "Other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainmetal"
                                                name="othercontainmetal"
                                                placeholder="Custom Metal"
                                                className="mt-3"
                                                value={formik.values.othercontainmetal}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainmetal && formik.errors.othercontainmetal && (
                                                <p className="error-message mt-1">{formik.errors.othercontainmetal}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="budget" className="required">What’s your approximate budget?</label>
                                    <Select
                                        options={budgetOptions}
                                        name="budget"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={budgetOptions.find(opt => opt.value === formik.values.budget)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('budget', selectedOption.value);
                                            if (selectedOption.value !== "Other") {
                                                formik.setFieldValue("othercontainbudget", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.budget && formik.errors.budget && (
                                        <p className="error-message mt-1">{formik.errors.budget}</p>
                                    )}
                                    {formik.values.budget === "Other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainbudget"
                                                name="othercontainbudget"
                                                placeholder="Custom Budget"
                                                className="mt-3"
                                                value={formik.values.othercontainbudget}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainbudget && formik.errors.othercontainbudget && (
                                                <p className="error-message mt-1">{formik.errors.othercontainbudget}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="ordernote" className="required">Tell us about your vision.</label>
                                    <textarea
                                        name="ordernote"
                                        id="ordernote"
                                        cols="30"
                                        rows="3"
                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                        value={formik.values.ordernote}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></textarea>
                                    {formik.touched.ordernote && formik.errors.ordernote && (
                                        <p className="error-message mt-1">{formik.errors.ordernote}</p>
                                    )}
                                </div>

                                <div onClick={handleClick} className="upload-box d-flex flex-column justify-content-center align-items-center mt-3" onDrop={handleDrop}
                                    onDragOver={handleDragOver}>
                                    <img src="/assets/img/custom-design/upload-icon.png" alt="Upload Icon" className="upload-icon" />
                                    <input
                                        type="file"
                                        id="file-upload"
                                        className="file-upload"
                                        multiple
                                        hidden
                                        accept="image/*"
                                        ref={fileInputRef}
                                        onChange={handleInputChange}
                                    />
                                    <label className="file-upload-label cursor-pointer mt-2">Upload Reference Images</label>
                                </div>
                                {formik.values.images.length !== 0 && (
                                    <div className="mt-4 d-flex flex-wrap gap-3">
                                        {formik.values.images.map((img, index) => (
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
                                    <button type="submit" className="btn btn-cart2" >Submit</button>
                                </div>
                            </form>


                        </div>
                        {/* </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="feature-product section-padding pt-0">
                <div className="hero-single-slide hero-overlay hero-slider-item" style={{ position: 'relative', height: '500px' }}>
                    {/* Image with next/image */}

                    <Image
                        src="/assets/img/custom-design/find-size.png"
                        alt="Find Ring Size"
                        fill
                        style={{ objectFit: 'cover', zIndex: -1 }}
                        priority // optional: improves loading speed
                    />

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-content slide-1">
                                    <h2 className="slide-title">
                                        <span>Find Your Ring Size</span>
                                    </h2>
                                    <h4 className="slide-desc">
                                        Unsure of Your Ring Size? No Problem!
                                        <br />
                                        Click on &rsquo;Find Now&rsquo; and let us assist you in choosing the right ring size for you.
                                    </h4>
                                    <div className="d-flex gap-3">
                                        <Link href="/shop" className="btn btn-hero">Print Now</Link>
                                        <Link href="/find-size" className="btn btn-find-now">Find Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-product section-padding pt-0">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2 className="title">Bliss Platina&rsquo;s Promise</h2>
                        <p className="sub-title">How We&rsquo;re Distinct From Others!
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
                            <p className="sub-title">The custom engagement rings has more sentiments and attachments then the premade rings, which are specially made only for you, so it&rsquo;s like one of a kind. Diamondrensu allows users to get their dream engagement ring by allowing 100% customization and design your own engagement ring your way. Viewers can submit the details on the form above, including the reference or inspiration images, and we can make the same design for you. We can custom made engagement rings in any shape, size, and color of lab grown diamonds, moissanite, or other gemstones. For custom orders Diamondrensu specializes in lab grown diamond engagement rings, moissanite engagement rings, stud earrings, moissanite wedding bands, bracelets and many more. If you have questions or would like an expert opinion feel free to schedule a virtual appointment with us.
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