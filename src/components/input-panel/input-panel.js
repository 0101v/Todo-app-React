import React from 'react';
import './input-panel.css';

const InputPanel = ({ setAddForm, onItemAdded, filterButton }) => {

  const onLabelChange = (event) => {
    setAddForm(event.target.value);
  };

  const onCleanLine = (event) => {
    event.target.value = '';
  };

  const onSubmit =(event) => {
    event.preventDefault();
    onItemAdded();
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="input"
        className='form-control input'
        onChange={onLabelChange}
        onClick={onCleanLine}/>
    </form>
  )
};

export default InputPanel;