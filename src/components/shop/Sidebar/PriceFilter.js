import { useEffect } from 'react';

const PriceFilter = () => {
  useEffect(() => {
    // Initialize price range slider here if needed
    // You might want to use a library like noUiSlider or rc-slider
  }, []);

  return (
    <div className="sidebar-single">
      <h5 className="sidebar-title">price</h5>
      <div className="sidebar-body">
        <div className="price-range-wrap">
          <div className="price-range" data-min="1" data-max="1000"></div>
          <div className="range-slider">
            <form action="#" className="d-flex align-items-center justify-content-between">
              <div className="price-input">
                <label htmlFor="amount">Price: </label>
                <input type="text" id="amount" />
              </div>
              <button className="filter-btn">filter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;