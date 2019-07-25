import { FETCH_MANUFACTURERS } from '../actions/types';
import {initialState} from './index';

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MANUFACTURERS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}