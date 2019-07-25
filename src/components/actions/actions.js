import { FETCH_MANUFACTURERS, FETCH_PRODUCTS } from './types';
import ApiService from '../API/ApiService';

export const fetchManufacturers = (sort = '?sort=1') => async dispatch => {
  const resolve = (await ApiService.manufacturersAPI(sort)).data.filter(item => item.icon);
  dispatch({
    type: FETCH_MANUFACTURERS,
    payload: resolve
  });
}

export const fetchProducts = (manufacturerId) => async dispatch => {
  const resolve = (await ApiService.productsAPI(manufacturerId)).data;
  dispatch({
    type: FETCH_PRODUCTS,
    payload: resolve
  });
}; 