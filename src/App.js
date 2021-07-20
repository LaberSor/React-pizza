import React from 'react';

import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas, fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [dispatch])
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
         <Route path="/" component={Home} exact/>
         <Route path="/Cart" component={Cart} exact/>
      </div>
    </div>);
}

export default App;
