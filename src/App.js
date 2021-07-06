import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

import pizzas from './redux/reducers/pizzas';
import filters from './redux/reducers/filters';


/* function App() {

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => {
      setPizzas(data.pizzas)
    });
  },[])

  return(
  <div className="wrapper">
      <Header />
      <div className="content">
         <Route path="/" render={() => <Home items={pizzas} />} exact/>
         <Route path="/Cart" component={Cart} exact/>
      </div>
    </div>)
}
 */

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
     this.props.setPizzas(data.pizzas);
     console.log(data.pizzas.items);
    });
  }

  render() {
    return(
  <div className="wrapper">
      <Header />
      <div className="content">
         <Route path="/" render={() => <Home items={this.props.items} />} exact/>
         <Route path="/Cart" component={Cart} exact/>
      </div>
    </div>);
  };
}

const mapStateToProps = (state) => {
 return {
   // items: this.state.pizzas.items,
    filters: state.filters,
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);