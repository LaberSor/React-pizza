import { combineReducers } from 'redux';
import pizzas from './pizzas';
import filters from './filters';

const rootReducer = combineReducers({
    pizza: pizzas, 
    filter: filters
});

export default rootReducer;