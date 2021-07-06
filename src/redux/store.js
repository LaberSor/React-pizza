import { createStore } from 'redux';
import rootReducer from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__); 


const store = createStore(
  rootReducer,
   composeEnhancers() 
);

window.store = store;

export default store;