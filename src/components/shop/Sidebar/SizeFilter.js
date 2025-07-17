const SizeFilter = () => {
  const sizes = [
    { id: 'customCheck111', name: 'S', count: 4 },
    { id: 'customCheck222', name: 'M', count: 5 },
    { id: 'customCheck333', name: 'L', count: 7 },
    { id: 'customCheck444', name: 'XL', count: 3 },
  ];

  return (
    <div className="sidebar-single">
      <h5 className="sidebar-title">size</h5>
      <div className="sidebar-body">
        <ul className="checkbox-container categories-list">
          {sizes.map((size, index) => (
            <li key={index}>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={size.id} />
                <label className="custom-control-label" htmlFor={size.id}>
                  {size.name} ({size.count})
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SizeFilter;