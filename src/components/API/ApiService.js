import axios from "axios";

class ApiService {
  static manufacturersAPI(sort) {
    return axios.get(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers${sort}`);
  }
}

export default ApiService;