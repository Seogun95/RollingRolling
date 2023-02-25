import { api } from './api';

export const userInfo = async () => {
  const response = await api.get('api/home/1');
  return response.data;
};
