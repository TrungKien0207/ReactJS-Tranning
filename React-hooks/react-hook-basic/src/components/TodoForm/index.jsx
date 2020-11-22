import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultTypes = {
  onSubmit: null,
}

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function handleChangeValue(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  //function khong cho browser reload khi submit
  //Prevent reloading browser
  function handleSumit(event) {
    event.preventDefault();
    if( !onSubmit ) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue('');
  }

  return (
    <form onSubmit={handleSumit} className="form-group row ml-3">
      <input 
        type="text" 
        value={value} 
        onChange={handleChangeValue}
        className="form-control col-md-3 mb-3" 
        id="inputPassword"
      >
      </input>
    </form>
  );
}

export default TodoForm;