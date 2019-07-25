import { FETCH_MANUFACTURERS } from './types';
import ApiService from '../API/ApiService';

export const fetchManufacturers = (sort = '?sort=1') => async dispatch => {
  const resolve = (await ApiService.manufacturersAPI(sort)).data.filter(item => item.icon);
  dispatch({
    type: FETCH_MANUFACTURERS,
    payload: resolve
  });
}
