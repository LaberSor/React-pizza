import React from 'react';
import axios from 'axios';

import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import store from './redux/store';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(({pizzas, filters}) => {
    return /* console.log(pizzas) */{
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  });

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      dispatch(setPizzas(data.pizzas));
      console.log(setPizzas(data.pizzas))
    });
  }, [])
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
         <Route path="/" render={() => <Home items={[]} />} exact/>
         <Route path="/Cart" component={Cart} exact/>
      </div>
    </div>);
}

export default App;
