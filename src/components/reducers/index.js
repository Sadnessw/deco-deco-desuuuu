import { combineReducers } from 'redux';
import manufacturersReducer from './manufacturersReducer';

export const initialState = {
  items: []
}

export default combineReducers({
  manufacturers: manufacturersReducer
});