import Link from 'next/link';
import { useState } from 'react';



export default function ContentSection() {

  return (
    <section className="feature-product section-padding pb-0">
      <div className="hero-single-slide hero-overlay">
        <div className="hero-slider-item bg-img" style={{ backgroundImage: 'url(/assets/img/slider/content-image.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-slider-content slide-1">
                  <h2 className="slide-title">Lorem <span>Ipsum Text</span></h2>
                  <h4 className="slide-desc">Designer Jewelry Necklaces-Bracelets-Earings <br /> Designer Jewelry Necklaces-Bracelets-Earings</h4>
                  <Link href="/shop" className="btn btn-hero">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}