import {authStore} from '@store/authStore';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAuth() {
  const auth = authStore(({login, signUp, logout}) => ({
    login,
    signUp,
    logout,
  }));

  const state = authStore(({token, loading}) => ({token, loading}));

  const [setToken, setLoading] = authStore(state => [
    state.setToken,
    state.setLoading,
  ]);

  React.useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@Authorization');
      if (token) {
        setToken(JSON.parse(token));
      }

      setLoading(false);
    })();
  }, []);

  return {state, auth};
}
