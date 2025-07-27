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
                    <h2 className="slide-title">Timeless Family <span>Jewelry Collection</span></h2>
                    <h4 className="slide-desc">Gold necklaces, bangles & earrings for all generations.</h4>
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
                    <h2 className="slide-title">Brilliant Diamond <span>Jewelry Collection</span></h2>
                    <h4 className="slide-desc">Certified diamonds & exclusive saving plans.</h4>
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
                    <h2 className="slide-title">Grace Designer <span>Jewelry Line</span></h2>
                    <h4 className="slide-desc">Rings, bridal sets & modern designer pieces.</h4>
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
