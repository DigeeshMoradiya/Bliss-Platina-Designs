import Banner from '@/components/Banner';
import Category from '@/components/Category';
import ContentSection from '@/components/ContentSection';
import FeaturesHighlight from '@/components/FeaturesHighlight';
import NewArrivalSection from '@/components/NewArrival';
import ProductSection from '@/components/ProductSection';
import TestimonialSection from '@/components/TestimonialSection';
import WhyChooseUs from '@/components/aboutuscomponent/WhyChooseUs';
import Loader from '@/components/common/Loader';
import SEO from '@/components/common/SEO';
import { getBanner, getCatregory, getCustomerReviews, getFeaturedProducts, getNewArrivals } from '@/lib/api/home/home';
import { getSetting } from '@/lib/api/setting/setting';
import { useEffect, useState } from 'react';

export default function Home() {
  const [bannerData, setBannerData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [featuredProductsData, setFeaturedProductsData] = useState([]);
  const [customerReviewsData, setCustomerReviewsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const onloadBanner = async () => {
    setLoader(true);
    try {
      const result = await getBanner();
      if (result?.success) {
        setBannerData(result?.data);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  const onloadCategory = async () => {
    setLoader(true);
    try {
      const result = await getCatregory();
      if (result?.success) {
        setCategoryData(result?.data);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  const onloadNewArrivals = async () => {
    setLoader(true);
    try {
      const result = await getNewArrivals();
      if (result?.success) {
        setNewArrivalsData(result?.data);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  const onloadFeaturedProducts = async () => {
    setLoader(true);
    try {
      const result = await getFeaturedProducts();
      if (result?.success) {
        setFeaturedProductsData(result?.data);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  const onloadCustomerReviews = async () => {
    setLoader(true);
    try {
      const result = await getCustomerReviews();
      if (result?.success) {
        setCustomerReviewsData(result?.data);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  useEffect(() => {
    onloadBanner();
    onloadCategory();
    onloadNewArrivals();
    onloadFeaturedProducts();
    onloadCustomerReviews();
  }, []);



  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Bliss Platina Designs - Jewelry crafted with elegance and precision."
      />

      <main>
        {loader ? <div className="d-flex justify-content-center align-items-center mb-5"><Loader /> </div> :
          <>
            <Banner bannerData={bannerData} />
            <Category categoryData={categoryData} />
            <NewArrivalSection newArrivalsData={newArrivalsData} />
            <ContentSection />
            <ProductSection featuredProductsData={featuredProductsData} />
            <WhyChooseUs />

            <TestimonialSection customerReviewsData={customerReviewsData} />
            <FeaturesHighlight />
          </>
        }

        {/* <TestimonialSection /> */}
      </main>
    </>
  );
}
