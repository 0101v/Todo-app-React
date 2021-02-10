import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({ filterButton }) => {
 
  const allButton = () => {
    filterButton('all');
  };
  const activeButton = () => {
    filterButton('active')
  };
  const doneButton = () => {
    filterButton('done')
  };
  
  return (
    <div className='btn-group'>
      <button 
        type='button'
        className='btn btn-info'
        onClick={allButton}
        autoFocus>
          All
      </button>
      <button 
        type='button'
        className='btn btn-outline-secondary'
        onClick={activeButton}>
        Active
      </button>
      <button 
        type='button'
        className='btn btn-outline-secondary'
        onClick={doneButton}>
        Done
      </button>
    </div>
  )
};

export default ItemStatusFilter;