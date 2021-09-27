import friends from './apis';

export const fetchProfile = async () => {
  try {
    const {data} = await friends.get('/auth/me');
    return data.user;
  } catch (error) {
    const {data} = error.response;
    throw data.errors.message;
  }
};

export const fetchStories = async () => {
  try {
    const {data} = await friends.get('/story/all');
    return data.stories;
  } catch (error) {
    const {data} = error.response;
    throw data.errors.message;
  }
};

export const fetchStoryById = async id => {
  const stroyId = id.queryKey[1];

  try {
    const {data} = await friends.get(`/story/${stroyId}`);
    return data.story;
  } catch (error) {
    const {data} = error.response;
    throw data.errors.message;
  }
};
