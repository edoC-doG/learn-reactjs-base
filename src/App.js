import React from 'react';
import './App.css';
import TodoFeature from 'features/Todo';
import { Route,Switch } from 'react-router-dom';
import AlbumFeature from 'features/Song';
import CounterFeature from 'features/Counter';
import Header from 'components/Header';
import ProductFeature from 'features/Products';

function App() {
  return (
    <div className="app" >
      <Header></Header>

      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} exact />
        <Route path="/products" component={ProductFeature} exact />
        {/* <Route component={NotFound}/> */}
      </Switch>
    </div>
  );
}
export default App;
