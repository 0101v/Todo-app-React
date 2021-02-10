import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({ onItemAdded }) => {

  return (
    <div className='item-add-form'>
      <button className='btn btn-primary btn-block'
      onClick={onItemAdded}>
        Add Element
      </button>
    </div>
  )
};

export default ItemAddForm;