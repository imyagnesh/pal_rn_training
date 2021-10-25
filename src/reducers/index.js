import {combineReducers} from 'redux';
import cart from './cartReducers';
import products from './productsReducer';

export default combineReducers({
  cart,
  products,
});
