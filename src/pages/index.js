import Banner from '@/components/Banner';
import Category from '@/components/Category';
import ProductSection from '@/components/ProductSection';
import TestimonialSection from '@/components/TestimonialSection';
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
        <ProductSection />
        <TestimonialSection />
        {/* <TestimonialSection /> */}
      </main>
    </>
  );
}
