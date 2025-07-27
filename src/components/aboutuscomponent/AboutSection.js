'use client';

import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <>
      {/* About Section - Left Image */}
      <section className="about-us section-padding pb-0">
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
            <div className="col-lg-7 d-flex align-items-center">
              <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <h5 className="about-sub-title">
                  Established in 1986, I.D. Jewelry, LLC is a family-owned and operated business that has earned a reputation for excellence in fine jewelry. With a legacy rooted in trust, craftsmanship, and personalized service, we have proudly served customers across the United States and around the globe for nearly four decades.
                </h5>
                <p>
                  Located in the heart of New York City's renowned 47th Street Diamond District, we are part of one of the world’s largest and most prestigious jewelry communities. Our showroom offers an immersive, one-on-one experience for those who value the tradition of in-store shopping, allowing clients to explore our carefully curated collection in person.
                </p>
                <p>
                  Over the years, our passion for quality and commitment to our customers has made us a household name. From engagement rings and wedding bands to custom designs and timeless classics, we are honored to be a part of your most meaningful moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Right Image */}
      <section className="about-us section-padding">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-7">
              <div className="about-content-2">
                <h2 className="about-title">Our Mission</h2>
                <h5 className="about-sub-title">
                  At I.D. Jewelry, our mission is to create a personalized and memorable jewelry experience for every client. We believe that fine jewelry should not only be beautiful but also meaningful, which is why we focus on craftsmanship, quality materials, and attention to detail in every piece we offer.
                </h5>
                <p>
                  Since our founding in 1986, we’ve remained committed to providing exceptional value and service. By operating from the heart of New York’s Diamond District, we’re able to offer some of the most competitive prices in the market while maintaining the highest standards in design and quality.
                </p>
                <p>
                  Whether you're searching for the perfect engagement ring, a custom design, or a timeless gift, our goal is to help you celebrate life’s most important moments. We take pride in building lasting relationships with our clients and being a trusted part of their jewelry journey.


                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-thumb">
                <Image
                  src="/assets/img/about/our-mission.png"
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
