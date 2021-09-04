import friends from '@api';

export const fetchProfile = async () => {
  try {
    const {data} = await friends.get('/auth/me');
    return data.user;
  } catch (error) {
    const {data} = error.response;
    throw data.errors.message;
  }
};
