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

export default function Diamond() {
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
        { value: "round", label: "Round" },
        { value: "oval", label: "Oval" },
        { value: "pear", label: "Pear" },
        { value: "cush_mod", label: "Cush Mod" },
        { value: "cush_brill", label: "Cush Brill" },
        { value: "emerald", label: "Emerald" },
        { value: "radiant", label: "Radiant" },
        { value: "princess", label: "Princess" },
        { value: "asscher", label: "Asscher" },
        { value: "square", label: "Square" },
        { value: "marquise", label: "Marquise" },
        { value: "heart", label: "Heart" },
        { value: "trilliant", label: "Trilliant" },
        { value: "euro_cut", label: "Euro Cut" },
        { value: "old_miner", label: "Old Miner" },
        { value: "bri", label: "Bri" },
        { value: "other", label: "Other" },
        { value: "baguette", label: "Baguette" },
        { value: "tap_bag", label: "Tap Bag" },
        { value: "half_moon", label: "Half Moon" },
        { value: "flanders", label: "Flanders" },
        { value: "trapezoid", label: "Trapezoid" },
        { value: "bullets", label: "Bullets" },
        { value: "kite", label: "Kite" },
        { value: "shield", label: "Shield" },
        { value: "star", label: "Star" },
        { value: "pentagon", label: "Pentagon" },
        { value: "hexagon", label: "Hexagon" },
        { value: "octagonal", label: "Octagonal" },
        { value: "rose_cut", label: "Rose Cut" },
        { value: "lozenge", label: "Lozenge" },
        { value: "Other", label: "Other" }
    ];

    const caratOptions = [
        { value: "", label: "Select an option" },
        { value: "0.30-0.39", label: "0.30-0.39" },
        { value: "0.40-0.49", label: "0.40-0.49" },
        { value: "0.50-0.69", label: "0.50-0.69" },
        { value: "0.70-0.89", label: "0.70-0.89" },
        { value: "0.90-0.99", label: "0.90-0.99" },
        { value: "1.00-1.49", label: "1.00-1.49" },
        { value: "1.50-1.99", label: "1.50-1.99" },
        { value: "2.00-2.99", label: "2.00-2.99" },
        { value: "3.00-3.99", label: "3.00-3.99" },
        { value: "4.00-4.99", label: "4.00-4.99" },
        { value: "5.00-5.99", label: "5.00-5.99" },
        { value: "6.00-7.99", label: "6.00-7.99" },
        { value: "8.00-9.99", label: "8.00-9.99" },
        { value: "10+", label: "10+" },
        { value: "Other", label: "Other" }
    ];

    const clarityOptions = [
        { value: "", label: "Select an option" },
        { value: "fl", label: "FL" },
        { value: "if", label: "IF" },
        { value: "vvs1", label: "VVS1" },
        { value: "vvs2", label: "VVS2" },
        { value: "vs1", label: "VS1" },
        { value: "vs2", label: "VS2" },
        { value: "si1", label: "SI1" },
        { value: "si2", label: "SI2" },
        { value: "si3", label: "SI3" },
        { value: "i1", label: "I1" },
        { value: "i2", label: "I2" },
        { value: "i3", label: "I3" },
        { value: "Other", label: "Other" }
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

    const cutOptions = [
        { value: "", label: "Select an option" },
        { value: "8x", label: "8X" },
        { value: "ideal", label: "Ideal" },
        { value: "excellent", label: "Excellent" },
        { value: "very_good", label: "Very Good" },
        { value: "good", label: "Good" },
        { value: "fair", label: "Fair" },
        { value: "poor", label: "Poor" },
        { value: "other", label: "Other" }
    ];

    const polishOptions = [
        { value: "", label: "Select an option" },
        { value: "8x", label: "8X" },
        { value: "ideal", label: "Ideal" },
        { value: "excellent", label: "Excellent" },
        { value: "very_good", label: "Very Good" },
        { value: "good", label: "Good" },
        { value: "fair", label: "Fair" },
        { value: "poor", label: "Poor" },
        { value: "other", label: "Other" }
    ];

    const symmetryOptions = [
        { value: "", label: "Select an option" },
        { value: "8x", label: "8X" },
        { value: "ideal", label: "Ideal" },
        { value: "excellent", label: "Excellent" },
        { value: "very_good", label: "Very Good" },
        { value: "good", label: "Good" },
        { value: "fair", label: "Fair" },
        { value: "poor", label: "Poor" },
        { value: "other", label: "Other" },
    ];

    const fluorescenceOptions = [
        { value: "", label: "Select an option" },
        { value: "none", label: "None" },
        { value: "faint", label: "Faint" },
        { value: "medium", label: "Medium" },
        { value: "strong", label: "Strong" },
        { value: "v_strong", label: "V Strong" },
        { value: "other", label: "Other" },
    ];

    const labOptions = [
        { value: "", label: "Select an option" },
        { value: "igi", label: "IGI" },
        { value: "gia", label: "GIA" },
        { value: "gccal", label: "GCCAL" },
        { value: "other", label: "Other" },
        { value: "none", label: "None" }
    ];

    const colorOptions = [
        { value: "", label: "Select an option" },
        { value: "d", label: "D" },
        { value: "e", label: "E" },
        { value: "f", label: "F" },
        { value: "g", label: "G" },
        { value: "h", label: "H" },
        { value: "i", label: "I" },
        { value: "j", label: "J" },
        { value: "k", label: "K" },
        { value: "l", label: "L" },
        { value: "m", label: "M" },
        { value: "n", label: "N" },
        { value: "o", label: "O" },
        { value: "p", label: "P" },
        { value: "q", label: "Q" },
        { value: "yellow", label: "Yellow" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "brown", label: "Brown" },
        { value: "red", label: "Red" },
        { value: "white", label: "White" },
        { value: "violet", label: "Violet" },
        { value: "purple", label: "Purple" },
        { value: "gray", label: "Gray" },
        { value: "olive", label: "Olive" },
        { value: "black", label: "Black" },
        { value: "other", label: "Other" }
    ];

    const overtoneOptions = [
        { value: "", label: "Select an option" },
        { value: "yellow", label: "Yellow" },
        { value: "yellowish", label: "Yellowish" },
        { value: "pink", label: "Pink" },
        { value: "pinkish", label: "Pinkish" },
        { value: "blue", label: "Blue" },
        { value: "bluish", label: "Bluish" },
        { value: "red", label: "Red" },
        { value: "reddish", label: "Reddish" },
        { value: "green", label: "Green" },
        { value: "greenish", label: "Greenish" },
        { value: "purple", label: "Purple" },
        { value: "purplish", label: "Purplish" },
        { value: "orange", label: "Orange" },
        { value: "violet", label: "Violet" },
        { value: "violetish", label: "Violetish" },
        { value: "gray", label: "Gray" },
        { value: "grayish", label: "Grayish" },
        { value: "black", label: "Black" },
        { value: "brown", label: "Brown" },
        { value: "brownish", label: "Brownish" },
        { value: "champagne", label: "Champagne" },
        { value: "cognac", label: "Cognac" },
        { value: "chameleon", label: "Chameleon" },
        { value: "white", label: "White" },
        { value: "other", label: "Other" }
    ];

    const intensityOptions = [
        { value: "", label: "Select an option" },
        { value: "fancy_deep", label: "Fancy Deep" },
        { value: "fancy_dark", label: "Fancy Dark" },
        { value: "fancy_vivid", label: "Fancy Vivid" },
        { value: "fancy_intense", label: "Fancy Intense" },
        { value: "fancy", label: "Fancy" },
        { value: "very_light", label: "Very Light" },
        { value: "fancy_light", label: "Fancy Light" },
        { value: "light", label: "Light" },
        { value: "faint", label: "Faint" },
        { value: "other", label: "Other" }
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
            stonetype: "",
            shape: "",
            carat: "",
            clarity: "",
            cut: "",
            polish: "",
            symmetry: "",
            fluorescence: "",
            lab: "",
            budget: "",
            ordernote: "",
            images: [],
            othercontain: "",
            othercontainStoneType: "",
            othercontainShape: "",
            othercontaincarat: "",
            othercontainclarity: "",
            othercontaincut: "",
            othercontainpolish: "",
            othercontainsymmetry: "",
            othercontainfluorescence: "",
            othercontainlab: "",
            othercontainbudget: "",
            color: "",
            overtone: "",
            intensity: "",
            othercontaincolor: "",
            othercontainovertone: "",
            othercontainintensity: ""
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
            stonetype: Yup.string().required("Please select a stone type"),
            shape: Yup.string().required("Please select a stone shape"),
            carat: Yup.string().required("Please select a carat weight"),
            clarity: Yup.string().required("Please select a clarity"),
            cut: Yup.string().required("Please select a cut grade"),
            polish: Yup.string().required("Please select a polish grade"),
            symmetry: Yup.string().required("Please select a symmetry grade"),
            fluorescence: Yup.string().required("Please select a fluorescence level"),
            lab: Yup.string().required("Please select a lab certification"),
            budget: Yup.string().required("Please select your budget"),
            ordernote: Yup.string().required("Please enter about"),
            othercontainStoneType: Yup.string().when("stonetype", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom stone type"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainShape: Yup.string().when("shape", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom shape"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontaincarat: Yup.string().when("carat", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom carat"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainclarity: Yup.string().when("clarity", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom clarity"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontaincut: Yup.string().when("cut", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom cut"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainpolish: Yup.string().when("polish", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom polish"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainsymmetry: Yup.string().when("symmetry", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom symmetry"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainfluorescence: Yup.string().when("fluorescence", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom fluorescence"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainlab: Yup.string().when("lab", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom lab"),
                otherwise: (schema) => schema.notRequired(),
            }), 
            othercontainbudget: Yup.string().when("budget", {
                is: (val) => val === "Other",
                then: (schema) => schema.required("Please enter your custom budget"),
                otherwise: (schema) => schema.notRequired(),
            }),
            color: Yup.string().required("Please select a color"),
            overtone: Yup.string().required("Please select an overtone"),
            intensity: Yup.string().required("Please select an intensity"),
            othercontaincolor: Yup.string().when("color", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom color"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainovertone: Yup.string().when("overtone", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom overtone"),
                otherwise: (schema) => schema.notRequired(),
            }),
            othercontainintensity: Yup.string().when("intensity", {
                is: (val) => val === "other",
                then: (schema) => schema.required("Please enter your custom intensity"),
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
                title="Diamonds"
                description="Learn more about our jewelry store, our mission, and our commitment to quality."
                keywords="about, jewelry, gold, diamond, company"
            />
            <Breadcrumb pageTitle="Diamonds" />
            <section className="feature-product section-padding pb-0">
                <div className="col-12">
                    <div className="section-title text-center col-lg-7 m-auto">
                        <h2 className="title">Create Your Perfect Diamond</h2>
                        <p className="sub-title m-auto"> Choose your ideal shape, size, and setting — and let Bliss Platina craft a diamond piece that’s uniquely yours. From engagement rings to elegant earrings, every design begins with your vision and ends in timeless brilliance.</p>
                    </div>
                </div>
            </section>

            <section className="checkout-page-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
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
                                    <label htmlFor="shape" className="required">What center stone shape would you like?</label>
                                    <Select
                                        options={shapeOptions}
                                        name="shape"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={shapeOptions.find(opt => opt.value === formik.values.shape)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('shape', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontainShape", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.shape && formik.errors.shape && (
                                        <p className="error-message mt-1">{formik.errors.shape}</p>
                                    )}
                                    {formik.values.shape === "other" && (
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
                                    <label htmlFor="color" className="required">What color are you interested in?</label>
                                    <Select
                                        options={colorOptions}
                                        name="color"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={colorOptions.find(opt => opt.value === formik.values.color)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('color', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontaincolor", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.color && formik.errors.color && (
                                        <p className="error-message mt-1">{formik.errors.color}</p>
                                    )}
                                    {formik.values.color === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontaincolor"
                                                name="othercontaincolor"
                                                placeholder="Custom Color"
                                                className="mt-3"
                                                value={formik.values.othercontaincolor}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontaincolor && formik.errors.othercontaincolor && (
                                                <p className="error-message mt-1">{formik.errors.othercontaincolor}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="overtone" className="required">What overtone are you interested in?</label>
                                    <Select
                                        options={overtoneOptions}
                                        name="overtone"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={overtoneOptions.find(opt => opt.value === formik.values.overtone)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('overtone', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontainovertone", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.overtone && formik.errors.overtone && (
                                        <p className="error-message mt-1">{formik.errors.overtone}</p>
                                    )}
                                    {formik.values.overtone === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainovertone"
                                                name="othercontainovertone"
                                                placeholder="Custom Overtone"
                                                className="mt-3"
                                                value={formik.values.othercontainovertone}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainovertone && formik.errors.othercontainovertone && (
                                                <p className="error-message mt-1">{formik.errors.othercontainovertone}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="intensity" className="required">What intensity are you interested in?</label>
                                    <Select
                                        options={intensityOptions}
                                        name="intensity"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={intensityOptions.find(opt => opt.value === formik.values.intensity)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('intensity', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontainintensity", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.intensity && formik.errors.intensity && (
                                        <p className="error-message mt-1">{formik.errors.intensity}</p>
                                    )}
                                    {formik.values.intensity === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainintensity"
                                                name="othercontainintensity"
                                                placeholder="Custom Intensity"
                                                className="mt-3"
                                                value={formik.values.othercontainintensity}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainintensity && formik.errors.othercontainintensity && (
                                                <p className="error-message mt-1">{formik.errors.othercontainintensity}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="clarity" className="required">What clarity grade are you interested in?</label>
                                    <Select
                                        options={clarityOptions}
                                        name="clarity"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={clarityOptions.find(opt => opt.value === formik.values.clarity)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('clarity', selectedOption.value);
                                            if (selectedOption.value !== "Other") {
                                                formik.setFieldValue("othercontainclarity", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.clarity && formik.errors.clarity && (
                                        <p className="error-message mt-1">{formik.errors.clarity}</p>
                                    )}
                                    {formik.values.clarity === "Other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainclarity"
                                                name="othercontainclarity"
                                                placeholder="Custom Clarity"
                                                className="mt-3"
                                                value={formik.values.othercontainclarity}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainclarity && formik.errors.othercontainclarity && (
                                                <p className="error-message mt-1">{formik.errors.othercontainclarity}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="cut" className="required">What cut grade are you interested in?</label>
                                    <Select
                                        options={cutOptions}
                                        name="cut"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={cutOptions.find(opt => opt.value === formik.values.cut)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('cut', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontaincut", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.cut && formik.errors.cut && (
                                        <p className="error-message mt-1">{formik.errors.cut}</p>
                                    )}
                                    {formik.values.cut === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontaincut"
                                                name="othercontaincut"
                                                placeholder="Custom Cut"
                                                className="mt-3"
                                                value={formik.values.othercontaincut}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontaincut && formik.errors.othercontaincut && (
                                                <p className="error-message mt-1">{formik.errors.othercontaincut}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="polish" className="required">What polish grade are you interested in?</label>
                                    <Select
                                        options={polishOptions}
                                        name="polish"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={polishOptions.find(opt => opt.value === formik.values.polish)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('polish', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontainpolish", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.polish && formik.errors.polish && (
                                        <p className="error-message mt-1">{formik.errors.polish}</p>
                                    )}
                                    {formik.values.polish === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainpolish"
                                                name="othercontainpolish"
                                                placeholder="Custom Polish"
                                                className="mt-3"
                                                value={formik.values.othercontainpolish}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainpolish && formik.errors.othercontainpolish && (
                                                <p className="error-message mt-1">{formik.errors.othercontainpolish}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="symmetry" className="required">What symmetry grade are you interested in?</label>
                                    <Select
                                        options={symmetryOptions}
                                        name="symmetry"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={symmetryOptions.find(opt => opt.value === formik.values.symmetry)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('symmetry', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontainsymmetry", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.symmetry && formik.errors.symmetry && (
                                        <p className="error-message mt-1">{formik.errors.symmetry}</p>
                                    )}
                                    {formik.values.symmetry === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainsymmetry"
                                                name="othercontainsymmetry"
                                                placeholder="Custom Symmetry"
                                                className="mt-3"
                                                value={formik.values.othercontainsymmetry}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainsymmetry && formik.errors.othercontainsymmetry && (
                                                <p className="error-message mt-1">{formik.errors.othercontainsymmetry}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="fluorescence" className="required">What fluorescence level are you interested in?</label>
                                    <Select
                                        options={fluorescenceOptions}
                                        name="fluorescence"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={fluorescenceOptions.find(opt => opt.value === formik.values.fluorescence)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('fluorescence', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontainfluorescence", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.fluorescence && formik.errors.fluorescence && (
                                        <p className="error-message mt-1">{formik.errors.fluorescence}</p>
                                    )}
                                    {formik.values.fluorescence === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainfluorescence"
                                                name="othercontainfluorescence"
                                                placeholder="Custom Fluorescence"
                                                className="mt-3"
                                                value={formik.values.othercontainfluorescence}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainfluorescence && formik.errors.othercontainfluorescence && (
                                                <p className="error-message mt-1">{formik.errors.othercontainfluorescence}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="lab" className="required">What lab certification are you interested in?</label>
                                    <Select
                                        options={labOptions}
                                        name="lab"
                                        classNamePrefix="custom"
                                        styles={customStyles}
                                        value={labOptions.find(opt => opt.value === formik.values.lab)}
                                        onChange={(selectedOption) => {
                                            formik.setFieldValue('lab', selectedOption.value);
                                            if (selectedOption.value !== "other") {
                                                formik.setFieldValue("othercontainlab", "");
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.lab && formik.errors.lab && (
                                        <p className="error-message mt-1">{formik.errors.lab}</p>
                                    )}
                                    {formik.values.lab === "other" && (
                                        <>
                                            <input
                                                type="text"
                                                id="othercontainlab"
                                                name="othercontainlab"
                                                placeholder="Custom Lab"
                                                className="mt-3"
                                                value={formik.values.othercontainlab}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.othercontainlab && formik.errors.othercontainlab && (
                                                <p className="error-message mt-1">{formik.errors.othercontainlab}</p>
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
                                        styles={customStyles}
                                        value={stoneOptions.find(opt => opt.value === formik.values.stonetype)}
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
                                    <button type="submit" className="btn btn-cart2">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-product section-padding pt-0">
                <div className="hero-single-slide hero-overlay hero-slider-item" style={{ position: 'relative', height: '500px' }}>
                    <Image
                        src="/assets/img/custom-design/find-size.png"
                        alt="Find Ring Size"
                        fill
                        style={{ objectFit: 'cover', zIndex: -1 }}
                        priority
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-content slide-1">
                                    <h2 className="slide-title">
                                        <span>Find Your Ideal Diamond</span>
                                    </h2>
                                    <h4 className="slide-desc">
                                        Download our curated diamond catalog in Excel format — complete with images, specifications, and prices.
                                        <br />
                                        Discover the perfect match before you buy or customize.
                                    </h4>
                                    <Link href="/shop" className="btn btn-hero">Download Diamond Excel Sheet</Link>
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
                        <p className="sub-title">How We&rsquo;re Distinct From Others!</p>
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
                                        <p>{item.description}</p>
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
                            <h2 className="title mb-3">Why Choose Loose Diamonds from Bliss Platina?</h2>
                            <p className="sub-title">
                                Buying loose diamonds gives you the freedom to design your jewelry exactly the way you want it. At Bliss Platina, we offer a wide range of certified diamonds—available in different shapes, sizes, cuts, colors, and clarity grades—to perfectly match your taste and budget. Our diamonds are ethically sourced and hand-selected for brilliance and quality.
                            </p>
                            <p className="sub-title">
                                Whether you&rsquo;re planning to create a custom engagement ring, earrings, pendant, or bracelet, our loose diamonds give you full creative control. We also provide detailed Excel catalogs with images and specifications so you can review and compare with ease. Need help choosing? Schedule a virtual consultation with our diamond experts for personalized guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}