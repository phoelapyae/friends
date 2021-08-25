import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import friends from '@/api';

export const useAuth = create(set => ({
  isAuth: {},
  checkAuth: async () => {
    try {
      set({isAuth: await AsyncStorage.getItem('@Authorization')});
    } catch (error) {
      return null;
    }
  },

  login: async () => {
    try {
      const user = await friends.post('/auth/signin');
      console.log('user', user);
      return user;
    } catch (error) {
      console.log('user error store', error.message);
    }
  },

  signUp: async () => {},

  isLoading: loading => set({loading}),
}));
