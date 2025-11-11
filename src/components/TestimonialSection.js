'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function TestimonialSection({ customerReviewsData }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const PrevArrow = ({ className, onClick }) => (
    <button type="button" className={className} onClick={onClick}>
      <i className="pe-7s-angle-left"></i>
    </button>
  );

  const NextArrow = ({ className, onClick }) => (
    <button type="button" className={className} onClick={onClick}>
      <i className="pe-7s-angle-right"></i>
    </button>
  );

  return (
    <section
      className="testimonial-area section-padding bg-img"
      style={{ backgroundImage: 'url(/assets/img/testimonial/testimonials-bg.jpg)' }}
    >
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-0">
              <h2 className="title">testimonials</h2>
              <p className="sub-title">What they say</p>
            </div>
          </div>
        </div>

        {/* Content Slider */}
        <div className="row mt-4">
          <div className="col-12">
            <Slider
              className="slick-arrow-style-review slick-dot-style testimonial-content-carousel slick-dot-style-testimonial"

              asNavFor={nav1}
              ref={slider2}
              slidesToShow={1}
              arrows={true}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
              fade={true}
              dots={true}
            >
              {customerReviewsData.map((item, index) => {
                const rating = Number(item?.review_count) || 0;

                return (
                  <div className="testimonial-content text-center" key={index}>
                    <p>{item.description}</p>

                    {/* Rating */}
                    <div className="ratings my-2">
                      {[...Array(5)].map((_, i) => {
                        if (i + 1 <= Math.floor(rating)) {
                          return (
                            <span key={i}>
                              <i className="fa fa-star"></i>
                            </span>
                          );
                        } else if (i < rating) {
                          return (
                            <span key={i}>
                              <i className="fa fa-star-half-o"></i>
                            </span>
                          );
                        } else {
                          return (
                            <span key={i}>
                              <i className="fa fa-star-o"></i>
                            </span>
                          );
                        }
                      })}
                    </div>

                    <h5 className="testimonial-author">{item.name}</h5>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
