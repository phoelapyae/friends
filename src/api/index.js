import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let app = {};

app.getToken = async () => {
  axios.defaults.baseURL = 'http://friendsmm.herokuapp.com/api';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  const AUTH_TOKEN = await AsyncStorage.getItem('@Authorization');
  axios.defaults.headers.common.Authorization = AUTH_TOKEN;
};

app.setToken = async token => {
  await AsyncStorage.setItem('@Authorization', token);
  axios.defaults.headers.common.Authorization = token;
};

app.get = async (url, params) => {
  await app.getToken();
  return await axios.get(url, params);
};

app.post = async (url, params) => {
  await app.getToken();
  return await axios.post(url, params);
};

app.put = async (url, params) => {
  await app.getToken();
  return await axios.put(url, params);
};

app.delete = async (url, params) => {
  await app.getToken();
  return await axios.delete(url, params);
};

export default app;
