'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Lindsy Niloms',
    img: '/assets/img/testimonial/testimonial-1.png',
    text: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
  },
  {
    name: 'Daisy Millan',
    img: '/assets/img/testimonial/testimonial-2.png',
    text: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
  },
  {
    name: 'Anamika Lusy',
    img: '/assets/img/testimonial/testimonial-3.png',
    text: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
  },
  {
    name: 'Maria Mora',
    img: '/assets/img/testimonial/testimonial-2.png',
    text: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
  },
];

export default function TestimonialSection() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <section className="testimonial-area section-padding bg-img" style={{ backgroundImage: 'url(/assets/img/testimonial/testimonials-bg.jpg)' }}>
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
