import { api } from './api';

// getPostList
export const getPostList = async (data) => {
  const response = await api.get(`/api/post/mypost/${data.id}`, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
  //console.log('response: ', response.data); // 데이터 확인
  return response.data;
};
