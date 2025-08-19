import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function ContentSection() {

  const router = useRouter();

  return (
    <section className="feature-product section-padding pb-0">
      <div className="hero-single-slide hero-overlay">
        <div className="hero-slider-item bg-img" style={{ backgroundImage: 'url(/assets/img/slider/content-image.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-slider-content slide-1">
                  <h2 className="slide-title">Timeless Elegance</h2>
                  <h4 className="slide-desc">Handcrafted jewelry made to shine.
                    <br /> Necklaces • Bracelets • Earrings</h4>
                  <Link href="/shop" onClick={() => router.push("/shop")}
                    className="btn btn-hero">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}