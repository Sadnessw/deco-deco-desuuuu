import { GET_PRODUCT_INFO } from '../actions/types';
import { initialState } from './index';

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_INFO:
      return {
        ...state,
        info: action.payload
      }
    default:
      return state;
  }
}