import { combineReducers } from 'redux';
import manufacturersReducer from './manufacturersReducer';
import productsReducer from './productsReducer';
import productInfoReducer from './productInfoReducer';
import { reducer as formReducer } from "redux-form";

export const initialState = {
  items: [],
  products: {
    result: []
  },
  info: {
    categories: [],
    taste: [],
    manufacturer: {}
  }
}

export default combineReducers({
  manufacturers: manufacturersReducer,
  products: productsReducer,
  info: productInfoReducer,
  form: formReducer
});