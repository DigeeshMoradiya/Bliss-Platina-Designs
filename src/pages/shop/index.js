import Breadcrumb from '@/components/common/Breadcrumb';
import SEO from '@/components/common/SEO';
import ProductGrid from '@/components/shop/ProductGrid';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';


const ShopPage = () => {
    const router = usePathname();
    const getrouter = useRouter();

    const { q } = getrouter.query;
    const [loading, setLoading] = useState(false);


    // Sample product data
    // const products = [
    //     {
    //         id: 1,
    //         name: 'Perfect Diamond Jewelry',
    //         manufacturer: 'Platinum',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-1.jpg',
    //         secondaryImage: '/assets/img/product/product-18.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     // Add more products as needed
    //     {
    //         id: 2,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 3,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     {
    //         id: 4,
    //         name: 'Handmade Golden Necklace',
    //         manufacturer: 'Quickiin',
    //         price: 60.00,
    //         oldPrice: 70.00,
    //         primaryImage: '/assets/img/product/product-2.jpg',
    //         secondaryImage: '/assets/img/product/product-17.jpg',
    //         isNew: true,
    //         discount: 10,
    //         colors: ['lightblue', 'darktan', 'grey', 'brown']
    //     },
    //     // Add all other products from the original HTML
    // ];



    return (
        <>
            <SEO
                title="Jewelry Shop | Elegant & Handcrafted Designs"
                description="Browse our exclusive jewelry collection featuring handcrafted rings, necklaces, bracelets, and more. Find timeless elegance and luxury pieces for every occasion."
            />
            <main>
                <Breadcrumb pageTitle="Shop" />

                <div className={`shop-main-wrapper section-padding ${loading ? "pb-0" : " "}`}>
                    <div className="container">
                        <div className="row">
                            {/* Sidebar Area */}
                            {/* <div className="col-lg-3 order-2 order-lg-1">
                <aside className="sidebar-wrapper">
                  <Categories />
                  <PriceFilter />
                  <BrandFilter />
                  <ColorFilter />
                  <SizeFilter />
                  <SidebarBanner />
                </aside>
              </div>
               */}
                            {/* Main Content Area */}
                            <div className="col-lg-12 order-1 order-lg-2">
                                <div className="shop-product-wrapper">
                                    {/* <ShopTopBar viewMode={viewMode} onViewChange={setViewMode} /> */}

                                    <ProductGrid viewMode={"grid"} setLoading={setLoading} loading={loading} search={q} />

                                    {/* <Pagination /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ShopPage;