import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import InputPanel from '../input-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

const App = () => {

  const [addForm, setAddForm] = useState('');
  
  const [important, setImportant] = useState(0);

  const [maxId, setMaxId] = useState(5); //хук id

  const [todoData, setTodoData] = useState([
    {label: 'Добавьте свой список', id: 0}
  ]); // хук элементов

  const [filterButtonOn, setFilterButtonOn] = useState(todoData);

  const deleteItem = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex( (el) => el.id === id);
      const newArr = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)];
      
      setFilterButtonOn(newArr);
      return newArr
    })
  }; //удаление элемента из списка

  const onItemAdded = () => {

    if (!addForm.trim().length) return;

    const newItem = {
      label: addForm,
      important: false,
      done: false,
      id: (setMaxId((maxId) => maxId + 1), maxId)
    };

    setAddForm('');
    
    const newArr = [
      ...todoData, newItem
    ];

    setTodoData(() => newArr);
    setFilterButtonOn(() => newArr);

      
  }; //добавление элементов в список

  const onToggleImportant = (id) => {
    
    setTodoData((todoData) => {

      const idx = todoData.findIndex((el) => el.id === id);

      if (todoData[idx].done) return todoData;

      const newArr = [...todoData];
      newArr[idx].important = !newArr[idx].important;
      
      return newArr
    })
  }; //важный элемент в списке

  const onToggleDone = (id) => {

    setTodoData((todoData) => {

      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData];
      newArr[idx].done = !newArr[idx].done;
      newArr[idx].important = false;

      return newArr
    })
  }; //зачеркнутый элемент

  const filterButton = (button) => {
    let idx;

    if(button == 'active') {
      idx = filterButtonOn.filter((el) => el.important);
    }
    if(button == 'done') {
      idx = filterButtonOn.filter((el) => el.done);
    }
    if (button == 'all') {
      idx = filterButtonOn;
    }
    setTodoData(idx);    
  }

  useEffect(() => {
    setImportant(todoData.filter((el) => el.important).length);
    
  }); //колличество важных элементов

  return (
    <div className='todo-app'>
      <AppHeader todo={important}/>
      <div className='top-panel d-flex'>
        <InputPanel setAddForm={setAddForm}
          onItemAdded={onItemAdded}
          filterButton={filterButton}/>
        <ItemStatusFilter filterButton={filterButton}/>
      </div>
      <ItemAddForm onItemAdded={onItemAdded}/>
      <TodoList 
        todos={todoData}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}/>
        <p className='comment'>Done - нажатие по названию элемента</p>
        <p>! - выделения элемена, пометка как важный</p>
    </div>
  )
}

export default App;