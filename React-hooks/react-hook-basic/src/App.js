import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Clock from './components/Clock';
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import PostList from './components/PostList';

function App() {
  //useState
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  function handleTodoList(todo) {
    console.log(todo);
    const index = todoList.find(x => x.id === todo.id);

    if( index < 0 ) return;

    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);

    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  //useEffect
  const [postList, setPostList] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    // filter nao do: search,...
  });

  useEffect( () => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
  
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  //useEffect Pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 11,
    _totalRows: 11,
  });

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  //useEffect Search
  function hanldeFiltersChange(newFilters) {
    console.log('new filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  //Clock
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      {/* useState */}
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoList}/> */}

      {/* useEffect */}
      {/* <PostFilterForm onSubmit={hanldeFiltersChange}/>
      <PostList posts={postList}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange}/> */}
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
