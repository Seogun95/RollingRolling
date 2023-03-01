import { api } from './api';

// homepage 전체 postlist 조회
export const getHomePostList = async (data) => {
  console.log('gethomepost : ', data);
  const response = await api.get(`/api/home/${data}`);
  console.log('gethomepost response: ', response);
  return response.data;
};
