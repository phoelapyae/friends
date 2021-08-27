import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import friends from '../api';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

const getInfoFromToken = token => {
  return new Promise((resolve, reject) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'email,name, picture',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  });
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

  /**
   * FacebookLogin function do get user email, picture & name from facebook api.
   * and pass into authWithSocial function to authenticate with our server.
   */
  facebookLogin: async () => {
    try {
      const login = LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (login) {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken).then(userInfo => {
              const payload = {
                email: userInfo.email,
                fullName: userInfo.name,
                avatar: userInfo.picture.data.url,
              };
              set(state => state.authWithSocial(payload));
            });
          });
        }
      }
    } catch (e) {
      throw e;
    }
  },

  authWithSocial: async payload => {
    try {
      const {data} = await friends.post('/auth/social/authentication', payload);
      await AsyncStorage.setItem('@Authorization', JSON.stringify(data.token));
      set({token: data.token});
    } catch (error) {
      if (error.message == 'Network Error') {
        throw 'Network Error';
      }

      const {data} = error.response;
      throw data.errors.message;
    }
  },

  setToken: token => set({token}),

  loading: false,

  token: undefined,
}));
