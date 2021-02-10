import React from 'react';
import './app-header.css';

const AppHeader = ({ todo, done }) => {
  return (
    <div className='app-header d-flex'>
      <h1>My Todo List</h1>
      <h2>Выделеных: {todo}</h2>
    </div>
  )
};

export default AppHeader;