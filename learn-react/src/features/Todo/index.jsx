import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './Components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ] 

  const [todoList, setTodoList] = useState(initTodoList);

  const [filterdStatus, setFilteredStatus] = useState('all'); //Chọn đối tượng nào cũng được

  const handleTodoClick = (todo, idx) => {
    // console.log(todo, idx);
    //Tao mot mang moi voi du lieu cu cua todolist
    const newTodoList =  [...todoList];
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    //updata todo list
    setTodoList(newTodoList);
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  }

  const handleShowCompleteClick = () => {
    setFilteredStatus('completed');
  }

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  }

  const renderTodoList = todoList.filter(todo => filterdStatus === 'all' || filterdStatus === todo.status);
  //console.log(renderTodoList);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={ renderTodoList } onTodoClick={handleTodoClick}/>

      <div>
        <button type="button" className="btn btn-primary m-1" onClick={handleShowAllClick}>Show All</button>
        <button type="button" className="btn btn-info m-1" onClick={handleShowCompleteClick}>Show Completed</button>
        <button type="button" className="btn btn-warning m-1" onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;