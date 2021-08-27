import {authStore} from '@store/authStore';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAuth() {
  const auth = authStore(({login, signUp, logout}) => ({
    login,
    signUp,
    logout,
  }));

  const authState = authStore(({token, loading}) => ({token, loading}));

  const setToken = authStore(state => state.setToken);

  React.useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@Authorization');
      if (token) {
        setToken(JSON.parse(token));
      }
    })();
  }, []);

  return {authState, auth};
}
