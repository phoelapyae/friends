import create from 'zustand';
import friends from '../api';

export const storyStore = create(set => ({
  createStory: async values => {
    set({loading: true});
    try {
      const {data} = await friends.post('/story/create', values);
      set({loading: false});
      console.log('data', data);
    } catch (error) {
      set({loading: false});
      console.log(error.response);
      const {data} = error.response;
      throw data.errors.message;
    }
  },

  loading: false,
}));
