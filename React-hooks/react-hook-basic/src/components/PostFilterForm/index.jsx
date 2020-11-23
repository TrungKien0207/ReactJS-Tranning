import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null); //khong thay doi gia tri sau moi lan render

  function handleSearchTermChange(event) {
    const value = event.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    };
    //debounce
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);   
    }, 300);
  }

  return (
    <form className="form-group row ml-3">
      <input 
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="form-control col-md-3 mb-3" 
        id="inputPassword"
      >
      </input>
    </form>
  );
}

export default PostFilterForm;