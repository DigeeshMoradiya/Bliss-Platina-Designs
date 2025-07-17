import { useState } from 'react';

const ShopTopBar = () => {
    const [viewMode, setViewMode] = useState('grid');

    const handleViewChange = (mode) => {
        setViewMode(mode);
    };

    return (
        <div className="shop-top-bar">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 order-2 order-md-1">
                    <div className="top-bar-left">
                        <div className="product-view-mode">
                            <a
                                className={viewMode === 'grid' ? 'active' : ''}
                                href="#"
                                data-target="grid-view"
                                data-bs-toggle="tooltip"
                                title="Grid View"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleViewChange('grid');
                                }}
                            >
                                <i className="fa fa-th"></i>
                            </a>
                            <a
                                href="#"
                                data-target="list-view"
                                data-bs-toggle="tooltip"
                                title="List View"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleViewChange('list');
                                }}
                            ><i className="fa fa-list"></i>
                            </a>
                        </div>
                        <div className="product-amount">
                            <p>Showing 1–16 of 21 results</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 order-1 order-md-2">
                    <div className="top-bar-right">
                        <div className="product-short">
                            <p>Sort By : </p>
                            <select className="nice-select" name="sortby">
                                <option value="trending">Relevance</option>
                                <option value="sales">Name (A - Z)</option>
                                <option value="sales">Name (Z - A)</option>
                                <option value="rating">Price (Low &gt; High)</option>
                                <option value="date">Rating (Lowest)</option>
                                <option value="price-asc">Model (A - Z)</option>
                                <option value="price-asc">Model (Z - A)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopTopBar;