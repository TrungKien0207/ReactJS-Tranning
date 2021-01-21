import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductFeature from './features/Product';
import productAPI from './api/productAPI';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeatures from './features/Counter';
import TodoFeature from './features/Todo';


function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productAPI.getAll(params);
      console.log(productList);
    }

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header/>

      <div>
        {/* <p><Link to="/todos">Todos</Link></p>
        <p><Link to="/albums">Albums</Link></p> */}

        {/* <p><NavLink to="/todos">Todos</NavLink></p>
        <p><NavLink to="/albums">Albums</NavLink></p> */}

        <Switch>
          <Redirect from="/home" to="/" exact />
          <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        
          <Route path="/" component={ CounterFeatures } exact />
          <Route path="/todos" component={ TodoFeature }/>
          <Route path="/albums" component={ AlbumFeature }/>

          <Route path="/products" component={ ProductFeature }/>

          <Route component={ NotFound }/>
        </Switch>

        {/* <Count />
        <ColorBox /> */}
      </div>
    </div>
  );
}

export default App;
