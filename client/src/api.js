import axios from 'axios';

export const uploadFile = async (data) => {
  const API_URL = 'https://fileshareonline.onrender.com';

  try {
    let response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.log('error while calling api', error.message);
  }
};
