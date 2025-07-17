

const Pagination = () => {
  return (
    <div className="paginatoin-area text-center">
      <ul className="pagination-box">
        <li><a className="previous" href="#"><i className="pe-7s-angle-left"></i></a></li>
        <li className="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a className="next" href="#"><i className="pe-7s-angle-right"></i></a></li>
      </ul>
    </div>
  );
};

export default Pagination;