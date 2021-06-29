import axios from 'axios';

export const getImages = async (page: number) => {
  const res = await axios.get('https://picsum.photos/v2/list', {
    params: {page: page, limit: 10},
  });
  return res.data;
};
