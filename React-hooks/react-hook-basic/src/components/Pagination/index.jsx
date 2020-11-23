import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit); //tong so item chia cho gioi han 1 trang
  //console.log('total: ', _totalRows / _limit);
  function handlePageChange(newPage) {
    if( onPageChange ) {
      onPageChange(newPage);
    }
  }

  return (
    <div>
      <button 
        type="button" 
        className="btn btn-info ml-2" 
        disabled={_page <= 1} 
        onClick={() => handlePageChange(_page - 1)}
      >
        Prev
      </button>
      <span className="pl-4 pr-4">{ _page }</span>
      <button 
        type="button" 
        className="btn btn-info ml-2" 
        disabled={_page >= totalPages} 
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;