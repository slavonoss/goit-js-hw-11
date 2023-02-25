import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const perPage = 40;

export default async function getPictures(query, page) {
  const options = {
    params: {
      key: '33929055-a4001bec97194f441c44cc27a',
      q: query,
      per_page: perPage,
      image_type: 'photo',
      orientation: 'horizontal',
      order: 'popular',
      page: page,
    },
  };

  try {
    const response = await axios.get('', options);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('caugth in fetch.js, ', error);
    return;
  }
}
