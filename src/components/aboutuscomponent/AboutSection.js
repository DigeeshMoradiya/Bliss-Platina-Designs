'use client';

import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <>
      {/* About Section - Left Image */}
      <section className="about-us section-padding">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-5">
              <div className="about-thumb">
                <Image
                  src="/assets/img/about/about.jpg"
                  alt="about"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <h5 className="about-sub-title">
                  Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world.
                </h5>
                <p>
                  For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond.
                </p>
                <p>
                  Based in the heart of New York’s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Right Image */}
      <section className="about-us">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-7">
              <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <h5 className="about-sub-title">
                  Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world.
                </h5>
                <p>
                  For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond.
                </p>
                <p>
                  Based in the heart of New York’s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-thumb">
                <Image
                  src="/assets/img/about/about.jpg"
                  alt="about"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
