import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiEndpoint = 'http://friendsmm.herokuapp.com/api';

const api = axios.create({
  baseURL: apiEndpoint,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@Authorization');
  config.headers['x-access-token'] = JSON.parse(token);

  return config;
});

export default api;
