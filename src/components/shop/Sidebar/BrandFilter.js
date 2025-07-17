const BrandFilter = () => {
  const brands = [
    { id: 'customCheck2', name: 'Studio', count: 3 },
    { id: 'customCheck3', name: 'Hastech', count: 4 },
    { id: 'customCheck4', name: 'Quickiin', count: 15 },
    { id: 'customCheck1', name: 'Graphic corner', count: 10 },
    { id: 'customCheck5', name: 'devItems', count: 12 },
  ];

  return (
    <div className="sidebar-single">
      <h5 className="sidebar-title">Brand</h5>
      <div className="sidebar-body">
        <ul className="checkbox-container categories-list">
          {brands.map((brand, index) => (
            <li key={index}>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={brand.id} />
                <label className="custom-control-label" htmlFor={brand.id}>
                  {brand.name} ({brand.count})
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrandFilter;