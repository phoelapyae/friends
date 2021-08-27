import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import friends from '../api';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import {Alert} from 'react-native';

const getInfoFromToken = token => {
  const PROFILE_REQUEST_PARAMS = {
    fields: {
      string: 'id,name,email',
    },
  };
  const profileRequest = new GraphRequest(
    '/me',
    {token, parameters: PROFILE_REQUEST_PARAMS},
    (error, user) => {
      if (error) {
        console.log('ERRROR', error);
        throw error;
      } else {
        Alert.alert(JSON.stringify(user));
        console.log('result:', user);
      }
    },
  );
  new GraphRequestManager().addRequest(profileRequest).start();
};

export const authStore = create(set => ({
  login: async values => {
    set({loading: true});
    try {
      const {data} = await friends.post('/auth/signin', values);
      await AsyncStorage.setItem('@Authorization', JSON.stringify(data.token));
      set({token: data.token, loading: false});
    } catch (error) {
      set({loading: false});
      if (error.message == 'Network Error') {
        throw 'Network Error';
      }

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
      if (error.message == 'Network Error') {
        throw 'Network Error';
      }

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

  facebookLogin: async () => {
    try {
      LoginManager.logInWithPermissions(['public_profile']).then(
        login => {
          console.log('login', login);
          if (login.isCancelled) {
            console.log('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              const accessToken = data.accessToken.toString();
              getInfoFromToken(accessToken);
            });
          }
        },
        error => {
          console.log('Login fail with error: ' + error);
        },
      );
    } catch (e) {
      console.log('login manager', e);
      throw e;
    }
  },

  setToken: token => set({token}),

  loading: false,

  token: undefined,
}));
