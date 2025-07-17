const Categories = () => {
  const categories = [
    { name: 'fashionware', count: 10 },
    { name: 'kitchenware', count: 5 },
    { name: 'electronics', count: 8 },
    { name: 'accessories', count: 4 },
    { name: 'shoe', count: 5 },
    { name: 'toys', count: 2 },
  ];

  return (
    <div className="sidebar-single">
      <h5 className="sidebar-title">categories</h5>
      <div className="sidebar-body">
        <ul className="shop-categories">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">{category.name} <span>({category.count})</span></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;