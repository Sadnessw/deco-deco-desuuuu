import { combineReducers } from 'redux';
import manufacturersReducer from './manufacturersReducer';
import productsReducer from './productsReducer';
import { reducer as formReducer } from "redux-form";


export const initialState = {
  items: [],
  products: {
    result: []
  },
}

export default combineReducers({
  manufacturers: manufacturersReducer,
  products: productsReducer,
  form: formReducer
});