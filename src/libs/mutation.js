import friends from './apis';

export const createStory = async payload => {
  try {
    const {data} = await friends.post('/story/create', payload);

    return data.data;
  } catch (e) {
    throw e?.message;
  }
};
