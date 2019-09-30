import axios from "axios";

class ApiService {
  static async manufacturersAPI(sort) {
    return (await axios.get(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers${sort}`))
      .data
      .filter(manufactItem => manufactItem.icon);
  };

  static productsAPI(manufacturerId) {
    return axios.get(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/goods?manufacturer=${manufacturerId}`);
  };

  static productInfoAPI(productId) {
    return axios.get(`https://speisekarte.telenorma.info/api/goods/${productId}`);
  }
}

export default ApiService;