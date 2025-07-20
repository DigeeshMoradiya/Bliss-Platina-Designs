import Banner from '@/components/Banner';
import Category from '@/components/Category';
import ContentSection from '@/components/ContentSection';
import FeaturesHighlight from '@/components/FeaturesHighlight';
import NewArrivalSection from '@/components/NewArrival';
import ProductSection from '@/components/ProductSection';
import TestimonialSection from '@/components/TestimonialSection';
import WhyChooseUs from '@/components/aboutuscomponent/WhyChooseUs';
import SEO from '@/components/common/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Bliss Platina Designs - Jewelry crafted with elegance and precision."
      />

      <main>
        <Banner />
        <Category />
        <NewArrivalSection />
        <ContentSection />
        <ProductSection />
        <WhyChooseUs />

        <TestimonialSection />
        <FeaturesHighlight />
        {/* <TestimonialSection /> */}
      </main>
    </>
  );
}
