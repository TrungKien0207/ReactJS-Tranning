import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';

function App() {
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

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      {/* <ColorBox /> */}

      <TodoForm onSubmit={handleTodoFormSubmit} />

      <TodoList todos={todoList} onTodoClick={handleTodoList}/>
    </div>
  );
}

export default App;
