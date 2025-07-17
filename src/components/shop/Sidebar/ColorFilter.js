const ColorFilter = () => {
  const colors = [
    { id: 'customCheck12', name: 'black', count: 20 },
    { id: 'customCheck13', name: 'red', count: 6 },
    { id: 'customCheck14', name: 'blue', count: 8 },
    { id: 'customCheck11', name: 'green', count: 5 },
    { id: 'customCheck15', name: 'pink', count: 4 },
  ];

  return (
    <div className="sidebar-single">
      <h5 className="sidebar-title">color</h5>
      <div className="sidebar-body">
        <ul className="checkbox-container categories-list">
          {colors.map((color, index) => (
            <li key={index}>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={color.id} />
                <label className="custom-control-label" htmlFor={color.id}>
                  {color.name} ({color.count})
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorFilter;