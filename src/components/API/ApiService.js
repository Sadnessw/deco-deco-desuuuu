import axios from 'axios';

class ApiService {
  static manufacturersAPI(sort) {
    return axios.get(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers${sort}`);
  }
  static productsAPI(manufacturerId) {
    return axios.get(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/goods?manufacturer=${manufacturerId}`);
  }
  static productInfoAPI(productId) {
    return axios.get(`https://speisekarte.telenorma.info/api/goods/${productId}`);
  }
}

export default ApiService;