import create from 'zustand';
import friends from '../api';

export const storyStore = create(set => ({
  stories: [],
  createStory: async values => {
    set({loading: true});
    try {
      await friends.post('/story/create', values);
      set({loading: false});
    } catch (error) {
      set({loading: false});
      console.log(error.response);
      const {data} = error.response;
      throw data.errors.message;
    }
  },

  loading: false,
}));
