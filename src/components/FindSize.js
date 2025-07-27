import Link from "next/link";
import Breadcrumb from "./common/Breadcrumb";
import SEO from "./common/SEO";
import ContactForm from "./contactuscomponent/ContactForm";
import { useState } from "react";
import { X } from "lucide-react"; // or use any icon library
import ProductGrid from "./shop/ProductGrid";
import ProductItem from "./shop/ProductItem";

export default function FindSize() {
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

    const steps = [
        {
            id: 1,
            name: 'Take A Thin & Small Rope',
            primaryImage: '/assets/img/find-size/step-1.png',
        },
        // Add more products as needed
        {
            id: 2,
            name: 'Put On Your Finger Slightly',
            primaryImage: '/assets/img/find-size/step-2.png',
        },
        {
            id: 3,
            name: 'Mark With Marker On Strip',
            primaryImage: '/assets/img/find-size/step-1.png',
        },
        {
            id: 4,
            name: 'Measure With Scale On Point',
            primaryImage: '/assets/img/find-size/step-2.png',
        },

    ];

    return (
        <>
            <SEO
                title="Custom Design"
                description="Learn more about our jewelry store, our mission, and our commitment to quality."
                keywords="about, jewelry, gold, diamond, company"
            />
            <Breadcrumb pageTitle="How To Measure Your Ring Size at Home" />
            <section className="feature-product section-padding pb-0">
                <div className="col-12">
                    <div className="section-title text-center col-lg-7 m-auto">
                        <h2 className="title">How To Find Your Ring Size At Home?</h2>
                        <p className="sub-title m-auto">Jewelry making is an art and Diamondrensu is blessed with the gifted craftsmen, who have the expertise to make one of the
                            finest handmade jewelry.</p>
                    </div>
                </div>
            </section>

            <div className="shop-main-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop-product-wrapper">
                                <div className="product-grid-container">
                                    <div className={`shop-product-wrap grid-view row mbn-30`}>
                                        {steps.map((product) => (
                                            <div key={product.id} className="col-md-3 col-sm-6">
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <img className="" src={product.primaryImage} alt="product" />

                                                    </figure>
                                                    <div className="product-caption text-center">

                                                        <h5 className="offer-text">{product.name}</h5>


                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action_link d-flex justify-content-center mt-5">
                        <button className="btn btn-cart2" >Watch Tutorial</button>
                    </div>
                </div>
            </div>
            <div className="header-top pt-0 pb-0"></div>
            <div class="cart-main-wrapper section-padding">
                <div class="container">
                    <div className="col-12">
                        <div className="section-title text-center col-lg-7 m-auto mb-4">
                            <h2 className="title">Find Out Ring Size Equivalents Globally</h2>
                        </div>
                    </div>
                    <div class="section-bg-color">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="pro-country">
                                                    <span class="text-dots">•</span> US <span class="text-dots">•</span> CA
                                                </th>
                                                <th class="pro-country">
                                                    <span class="text-dots">•</span> UK <span class="text-dots">•</span> AU <span class="text-dots">•</span> IE <br />
                                                    <span class="text-dots">•</span> NZ
                                                </th>
                                                <th class="pro-country">
                                                    <span class="text-dots">•</span> JP <span class="text-dots">•</span> IN <span class="text-dots">•</span> CN <br />
                                                    <span class="text-dots">•</span> SA
                                                </th>
                                                <th class="pro-country">
                                                    <span class="text-dots">•</span> ES <span class="text-dots">•</span> IT <span class="text-dots">•</span> NL <br />
                                                    <span class="text-dots">•</span> CH
                                                </th>
                                                <th class="pro-country">
                                                    <span class="text-dots">•</span> Início-Diameter <br />
                                                    <span class="text-dots">•</span> Circunferência (MM)
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr><td>3</td><td>A</td><td>-</td><td>41</td><td>40</td></tr>
                                            <tr><td>3.25</td><td>A½</td><td>-</td><td>42</td><td>41</td></tr>
                                            <tr><td>3.50</td><td>B</td><td>1</td><td>43</td><td>42</td></tr>
                                            <tr><td>3.75</td><td>B½</td><td>2</td><td>44</td><td>43</td></tr>
                                            <tr><td>4</td><td>C½</td><td>4</td><td>45</td><td>44</td></tr>
                                            <tr><td>4.25</td><td>D½</td><td>5</td><td>46</td><td>45</td></tr>
                                            <tr><td>4.5</td><td>F</td><td>6</td><td>47</td><td>46</td></tr>
                                            <tr><td>4.75</td><td>G</td><td>7</td><td>48</td><td>47</td></tr>
                                            <tr><td>5</td><td>H½</td><td>9</td><td>49</td><td>48</td> </tr>
                                            <tr><td>5.5</td><td>J½</td><td>10</td><td>50</td><td>49</td> </tr>
                                            <tr><td>6</td><td>L</td><td>11</td><td>51</td><td>50</td></tr>
                                            <tr><td>6.5</td><td>M</td><td>13</td><td>52</td><td>51</td></tr>
                                            <tr><td>7</td><td>N</td><td>14</td><td>53</td><td>52</td></tr>
                                            <tr><td>7.5</td><td>O</td><td>15</td><td>55</td><td>53</td></tr>
                                            <tr><td>8</td><td>P</td><td>16</td><td>56</td><td>54</td></tr>
                                            <tr><td>8.5</td><td>Q</td><td>17</td><td>57</td><td>55</td></tr>
                                            <tr><td>9</td><td>S</td><td>18</td><td>58</td><td>56</td></tr>
                                            <tr><td>9.5</td><td>T</td><td>20</td><td>59</td><td>57</td></tr>
                                            <tr><td>10</td><td>T½</td><td>21</td><td>60</td><td>58</td></tr>
                                            <tr><td>10.5</td><td>U½</td><td>22</td><td>61</td><td>59</td></tr>
                                            <tr><td>11</td><td>V½</td><td>23</td><td>62</td><td>60</td></tr>
                                            <tr><td>11.5</td><td>W½</td><td>25</td><td>63</td><td>61</td></tr>
                                            <tr><td>12</td><td>Y</td><td>26</td><td>64</td><td>62</td></tr>
                                            <tr><td>12.5</td><td>Z</td><td>27</td><td>65</td><td>63</td></tr>
                                            <tr><td>13</td><td>Z½</td><td>28</td><td>66</td><td>64</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className="section-padding pt-0">
                <img src="/assets/img/find-size/banner.jpg" alt="Policy Background" style={{ width: '100%' }} />

            </section>

        </>
    );
}