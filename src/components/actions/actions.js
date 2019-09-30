import { FETCH_MANUFACTURERS, FETCH_PRODUCTS, GET_PRODUCT_INFO } from './types';
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

export const getProductInfo = (productId) => async dispatch => {
  const resolve = (await ApiService.productInfoAPI(productId)).data;
  dispatch({
    type: GET_PRODUCT_INFO,
    payload: resolve
  });
};
