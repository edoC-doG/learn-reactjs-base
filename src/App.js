import React, { useEffect } from 'react';
import './App.css';
import TodoFeature from 'features/Todo';
import { Route, Link, Switch } from 'react-router-dom';
import AlbumFeature from 'features/Song';
import productApi from './api/productApi';
import CounterFeature from 'features/Counter';
import Header from 'components/Header';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="app" >
      <Header></Header>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} exact />
        {/* <Route component={NotFound}/> */}
      </Switch>
    </div>
  );
}
export default App;
