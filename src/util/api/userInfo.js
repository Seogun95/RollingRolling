import { instance } from './api';

export const userInfo = async () => {
  const response = await instance.get('/user');
  return response.data;
};
