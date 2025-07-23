import { useState } from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/common/Breadcrumb';
import Categories from '@/components/shop/Sidebar/Categories';
import PriceFilter from '@/components/shop/Sidebar/PriceFilter';
import BrandFilter from '@/components/shop/Sidebar/BrandFilter';
import ColorFilter from '@/components/shop/Sidebar/ColorFilter';
import SizeFilter from '@/components/shop/Sidebar/SizeFilter';
import SidebarBanner from '@/components/shop/Sidebar/SidebarBanner';
import ShopTopBar from '@/components/shop/ShopTopBar';
import ProductGrid from '@/components/shop/ProductGrid';
import Pagination from '@/components/shop/Pagination';
import SEO from '@/components/common/SEO';


const ShopPage = () => {
    const [viewMode, setViewMode] = useState('grid');

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Perfect Diamond Jewelry',
            manufacturer: 'Platinum',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-1.jpg',
            secondaryImage: '/assets/img/product/product-18.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        // Add more products as needed
        {
            id: 2,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 3,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        {
            id: 4,
            name: 'Handmade Golden Necklace',
            manufacturer: 'Quickiin',
            price: 60.00,
            oldPrice: 70.00,
            primaryImage: '/assets/img/product/product-2.jpg',
            secondaryImage: '/assets/img/product/product-17.jpg',
            isNew: true,
            discount: 10,
            colors: ['lightblue', 'darktan', 'grey', 'brown']
        },
        // Add all other products from the original HTML
    ];

    return (
        <>
           <SEO/>

            <main>
                <Breadcrumb pageTitle="Shop" />

                <div className="shop-main-wrapper section-padding">
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

                                    <ProductGrid products={products} viewMode={viewMode} />

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