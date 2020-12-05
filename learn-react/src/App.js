import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
//import './App.css';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <h1>Home page</h1>

      {/* <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p> */}

      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p>

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={ TodoFeature } exact />
        <Route path="/todos" component={ TodoFeature }/>
        <Route path="/albums" component={ AlbumFeature }/>

        <Route component={ NotFound }/>
      </Switch>

      {/* <Count />
      <ColorBox /> */}
    </div>
  );
}

export default App;
