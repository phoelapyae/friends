import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import friends from '../api';

export const authStore = create(set => ({
  login: async values => {
    try {
      const {data} = await friends.post('/auth/signin', values);
      await AsyncStorage.setItem('@Authorization', JSON.stringify(data.token));
      set({token: data.token});
    } catch (error) {
      console.log('error', error);
    }
  },

  signUp: async values => {
    set({loading: true});
    try {
      const {data} = await friends.post('/auth/signup', values);
      await AsyncStorage.setItem('@Authorization', JSON.stringify(data.token));
      set({token: data.token});
    } catch (error) {
      set({loading: false});
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem('@Authorization');
      set({
        user: undefined,
      });
    } catch (e) {
      console.log('Logout Error', e);
    }
  },

  setToken: token => set({token}),

  setLoading: loading => set({loading}),

  token: undefined,
}));
