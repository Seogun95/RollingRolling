import { async } from 'q';
import { api } from './api';

// homepage 전체 postlist 조회
export const getHomePostList = async (data) => {
  //console.log('gethomepost : ', data);
  const response = await api.get(`/api/home/${data}`);
  //console.log('gethomepost response: ', response);
  return response.data;
};

export const searchUser = async (data) => {
  console.log(typeof data.search);
  const input = 'aaa123';

  const encodedInput = encodeURIComponent(input);
  const response = await api.get(`/api/user/search/aaa123`, {
    headers: {
      Authorization: data.token,
    },
  });
  return response.data;
};
