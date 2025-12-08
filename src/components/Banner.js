import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

export default function Banner({ bannerData }) {

  const router = useRouter();
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

  const handleproduct = (name) => {
    router.push(`/shop?q=${name}`)
  }

  return (
    <div className="slider-area">
      <Slider
        className="slick-arrow-style slick-arrow-style_hero slick-dot-style"
        {...sliderSettings}
      >
        {bannerData?.map((banner, index) => (
          <div
            key={index}
            className="hero-single-slide hero-overlay"
          >
            <div
              className="hero-slider-item bg-img"
              style={{ backgroundImage: `url(${banner.image || '/assets/img/slider/home1-slide2.jpg'})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="hero-slider-content slide-1">
                      <h2
                        className="slide-title"
                        style={{ color: banner?.text_color }}
                      >
                        {banner.title.split(',')[0]}
                        <span>{banner.title.split(',')[1]?.trim()}</span>
                      </h2>
                      <h4 className="slide-desc" style={{ color: banner?.text_color }}>
                        {banner.short_description}
                      </h4>
                      <Link href={`/shop?q=${banner?.category_name}`} onClick={() => handleproduct(banner?.category_name)} className="btn btn-hero">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}



        {/* <div className="hero-single-slide hero-overlay">
          <div className="hero-slider-item bg-img" style={{ backgroundImage: 'url(/assets/img/slider/home1-slide3.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-slider-content slide-3">
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
        </div> */}
      </Slider>
    </div>
  );
}
