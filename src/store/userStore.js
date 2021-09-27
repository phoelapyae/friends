import create from 'zustand';
import friends from '@libs/apis';

export const userStore = create(set => ({
  me: {},
  fetchProfile: async () => {
    set({loading: true});
    try {
      const {data} = await friends.get('/auth/me');
      set({loading: false, me: data.user});
    } catch (error) {
      set({loading: false});
      const {data} = error.response;
      throw data.errors.message;
    }
  },

  updateProfile: async values => {
    set({loading: true});
    try {
      const {data} = await friends.put('/users/profile/update', values);
      set({loading: false, me: data.profile});
    } catch (error) {
      set({loading: false});
      const {data} = error.response;
      throw data.errors.message;
    }
  },

  loading: false,
}));
