import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import productReducer from '../redux/reducer/ProductReducer'; 

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;
