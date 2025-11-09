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
                  src="/assets/img/about/our-mission.png"
                  //about.jpg
                  alt="about"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="about-content">
                <h2 className="about-title">About Us</h2>
                {/* <h2 className="about-title">Our Mission</h2> */}
                <h5 className="about-sub-title">
                  Welcome to Bliss Platina Designs, where elegance meets craftsmanship.
                </h5>
                <p>
                  We are a USA based jewelry brand devoted to creating timeless diamond pieces that reflect beauty, grace, and sophistication. Each design is thoughtfully curated, blending modern trends with classic touches to celebrate life&rsquo;s most cherished moments.
                </p>
                <p>
                  Our collections are more than accessories, they are heirlooms, crafted for those who value style, quality, and meaning. At Bliss Platina Designs, we focus on using ethically sourced diamonds and premium materials, ensuring every piece is a true treasure.
                </p>
                <p>
                  Whether you&rsquo;re shopping for a special occasion or simply to treat yourself, we&rsquo;re honored to be part of your story.
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
                  At Bliss Platina Design Jewelry, our mission is to craft jewelry that tells your story. We believe every piece should not only shine with beauty but also carry meaning, love, and memories.
                </h5>
                <p>
                  Since 2004, we have been dedicated to exceptional craftsmanship, ethical sourcing, and unmatched value. From the heart of New York&rsquo;s Diamond District, we combine artistry with integrity to bring you timeless designs at fair prices.
                </p>
                <p>
                 Whether it&rsquo;s an engagement ring, a custom creation, or a gift to cherish, our goal is to make life&rsquo;s special moments unforgettable. We&rsquo;re more than jewelers—we&rsquo;re your trusted partner in celebrating love and milestones for generations to come.
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
