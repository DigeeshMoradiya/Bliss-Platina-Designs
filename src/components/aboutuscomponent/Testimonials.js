'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 

const testimonials = [
  {
    name: 'Lindsy Niloms — USA',
    img: '/assets/img/testimonial/testimonial-1.png',
    text: 'Absolutely in love with the necklace I received! The craftsmanship is stunning and it arrived beautifully packaged. Will definitely order again.',
  },
  {
    name: 'Daisy Millan — UK',
    img: '/assets/img/testimonial/testimonial-2.png',
    text: 'The earrings were elegant and even more beautiful in person. Excellent service and fast shipping made the experience even better!',
  },
  {
    name: 'Anamika Lusy — UAE',
    img: '/assets/img/testimonial/testimonial-3.png',
    text: 'I ordered a bracelet for my sister and she loved it! Smooth WhatsApp support and premium quality—highly recommended.',
  },
  {
    name: 'Maria Mora — Australia',
    img: '/assets/img/testimonial/testimonial-2.png',
    text: 'Unique designs and exceptional detail. This is now my go-to jewelry store for gifting and personal purchases!',
  },
];


export default function Testimonials() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <section className="testimonial-area section-padding bg-img " style={{ backgroundImage: 'url(/assets/img/testimonial/testimonials-bg.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Section title */}
            <div className="section-title text-center">
              <h2 className="title">testimonials</h2>
              <p className="sub-title">What they say</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

            {/* Thumbnail Carousel */}
            <div className="testimonial-thumb-wrapper">
              <Slider
                asNavFor={nav2}
                ref={slider1}
                slidesToShow={3}
                centerMode
                swipeToSlide
                focusOnSelect
                arrows={false}
                centerPadding="0px"
                className="testimonial-thumb-carousel"
              >
                {testimonials.map((item, index) => (
                  <div key={index} className="testimonial-thumb text-center">
                    <img src={item.img} alt="testimonial-thumb" className="rounded-circle mx-auto" width="80" height="80" />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Content Carousel */}
            <div className="testimonial-content-wrapper mt-4">
              <Slider
                asNavFor={nav1}
                ref={slider2}
                slidesToShow={1}
                arrows={false}
                fade
                dots={false}
                className="testimonial-content-carousel"
              >
                {testimonials.map((item, index) => (
                  <div className="testimonial-content text-center" key={index}>
                    <p>{item.text}</p>
                    <div className="ratings my-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}><i className="fa fa-star-o"></i></span>
                      ))}
                    </div>
                    <h5 className="testimonial-author">{item.name}</h5>
                  </div>
                ))}
              </Slider>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
