import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import styles from './ContentSection.module.css';

const CustomPrevArrow = ({ className, onClick }) => {
  const isDisabled = className?.includes('slick-disabled');
  return (
    <div
      className={`${styles.arrow} ${styles.prevArrow} ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        if (!isDisabled) onClick?.();
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </div>
  );
};

const CustomNextArrow = ({ className, onClick }) => {
  const isDisabled = className?.includes('slick-disabled');
  return (
    <div
      className={`${styles.arrow} ${styles.nextArrow} ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        if (!isDisabled) onClick?.();
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  );
};

export default function ContentSection({ featuredProductsData }) {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleImageClick = (slug) => {
    router.push(`/shop/${slug}`);
  };

  const slides = featuredProductsData?.map(product => {
    let imageFiles = [];
    if (Array.isArray(product?.images)) {
      imageFiles = product.images;
    } else if (typeof product?.images === "string" && product.images.trim() !== "") {
      try {
        imageFiles = JSON.parse(product.images);
      } catch (e) {
        imageFiles = [];
      }
    }
    return {
      image: imageFiles?.[0],
      slug: product.slug
    };
  }).filter(s => s.image) || [];

  return (
    <section className={styles.contentSection}>
      <div className="container">
        <div className={styles.flexContainer}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Your Perfect Ring, Made to Order.</h2>
            <p className={styles.description}>
              From stone to setting, we craft every ring by hand, just the way you want it.
              Choose your design, personalize every detail, and see it come to life with updates at every step.
            </p>
            <button
              className="btn btn-hero mt-0"
              style={{ padding: '14px 30px', borderRadius: '50px' }}
              onClick={() => router.push('/custom-design')}
            >
              SUBMIT CUSTOM DESIGN INQUIRY
            </button>
          </div>
          <div className={styles.sliderContainer}>
            <Slider {...settings}>
              {slides?.map((slide, index) => (
                <div key={index}>
                  <div style={{ padding: '0 4px' }}>
                    <div
                      className={styles.imageWrapper}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(slide.slug);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}






