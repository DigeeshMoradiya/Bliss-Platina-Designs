import Link from 'next/link';
import Slider from 'react-slick';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="pe-7s-angle-left"></i>
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="pe-7s-angle-right"></i>
    </button>
  );
};

export default function Banner() {

  const sliderSettings = {
    fade: true,
    speed: 1000,
    dots: false,
    autoplay: true,
    prevArrow: <PrevArrow className="slick-prev" />,
		nextArrow: <NextArrow className="slick-next" />,
		responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  };

  return (
    <div className="slider-area">
      <Slider className="slick-arrow-style slick-arrow-style_hero slick-dot-style" {...sliderSettings}>
        <div className="hero-single-slide hero-overlay">
          <div className="hero-slider-item bg-img" style={{ backgroundImage: 'url(/assets/img/slider/home1-slide2.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-slider-content slide-1">
                    <h2 className="slide-title">Family Jewelry <span>Collection</span></h2>
                    <h4 className="slide-desc">Designer Jewelry Necklaces-Bracelets-Earings</h4>
                    <Link href="/shop" className="btn btn-hero">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-single-slide hero-overlay">
          <div className="hero-slider-item bg-img" style={{ backgroundImage: 'url(/assets/img/slider/home1-slide3.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-slider-content slide-2 float-md-end float-none">
                    <h2 className="slide-title">Diamonds Jewelry <span>Collection</span></h2>
                    <h4 className="slide-desc">Shukra Yogam & Silver Power Silver Saving Schemes.</h4>
                    <Link href="/shop" className="btn btn-hero">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-single-slide hero-overlay">
          <div className="hero-slider-item bg-img" style={{ backgroundImage: 'url(/assets/img/slider/home1-slide1.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-slider-content slide-3">
                    <h2 className="slide-title">Grace Designer <span>Jewelry</span></h2>
                    <h4 className="slide-desc">Rings, Occasion Pieces, Pandora & More.</h4>
                    <Link href="/shop" className="btn btn-hero">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
