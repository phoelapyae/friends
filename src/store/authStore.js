import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import friends from '../api';

export const authStore = create(set => ({
  login: async values => {
    set({loading: true});
    try {
      const {data} = await friends.post('/auth/signin', values);
      await AsyncStorage.setItem('@Authorization', JSON.stringify(data.token));
      set({token: data.token, loading: false});
    } catch (error) {
      set({loading: false});
      const {data} = error.response;
      throw data.errors.message;
    }
  },

  signUp: async values => {
    set({loading: true});
    try {
      const {data} = await friends.post('/auth/signup', values);
      await AsyncStorage.setItem('@Authorization', JSON.stringify(data.token));
      set({token: data.token, loading: false});
    } catch (error) {
      set({loading: false});
      const {data} = error.response;
      throw data.errors.message;
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem('@Authorization');
      set({
        token: undefined,
      });
    } catch (e) {
      console.log('Logout Error', e);
    }
  },

  setToken: token => set({token}),

  loading: false,

  token: undefined,
}));
