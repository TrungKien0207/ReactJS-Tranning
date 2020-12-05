import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../Components/TodoList';
import queryString from 'query-string';

function ListPage(props) {
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

  const location = useLocation();

  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterdStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log(params);

    return params.status;
  }); //Chọn đối tượng nào cũng được

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

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
    const queryParams = { status: 'all'};
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  const handleShowCompleteClick = () => {
    const queryParams = { status: 'completed'};
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  const handleShowNewClick = () => {
    const queryParams = { status: 'new'};
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
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

export default ListPage;