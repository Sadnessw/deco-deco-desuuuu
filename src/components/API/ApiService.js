import axios from 'axios';

class ApiService {
  static manufacturersAPI(params) {
    return axios.get(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers`, {
      params
    });
  }
  static productsAPI(params) {
    return axios.get(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/goods`, {
      params
    });
  }
  static productInfoAPI(productId) {
    return axios.get(`https://speisekarte.telenorma.info/api/goods/${productId}`);
  }
}

export default ApiService;