import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

(async () => {
  const AUTH_TOKEN = await AsyncStorage.getItem('@Authorization');
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
})();

axios.defaults.baseURL = 'http://friendsmm.herokuapp.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
