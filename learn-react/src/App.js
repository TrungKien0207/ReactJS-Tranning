import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NotFound from './components/NotFound'
import AlbumFeature from './features/Album'
import CounterFeatures from './features/Counter'
import ProductFeature from './features/Product'
import TodoFeature from './features/Todo'

function App() {
   return (
      <div className='App'>
         <Header />

         <div>
            <Switch>
               <Redirect from='/home' to='/' exact />
               <Redirect from='/post-list/:postId' to='/posts/:postId' exact />

               <Route path='/' component={CounterFeatures} exact />
               <Route path='/todos' component={TodoFeature} />
               <Route path='/albums' component={AlbumFeature} />

               <Route path='/products' component={ProductFeature} />

               <Route component={NotFound} />
            </Switch>

         </div>
      </div>
   )
}

export default App
