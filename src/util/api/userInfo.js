import { api } from './api';

// export const userSignUp = async (data) => {
//   const response = await api.post('api/user/signup', {
//     username: data.username,
//     password: data.password,
//     email: data.email,
//     nickname: data.nickname,
//   });
//   return response;
// };

//회원 전체 조회
export const userInfo = async () => {
  const response = await api.get('api/home/1');
  return response.data;
};
