import { api } from './api';
import axios from 'axios';

// getPostList
export const getPostList = async (data) => {
  const response = await api.get(`/api/post/${data.id}`, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
  return response.data;
};

// pw check
export const passwordCheck = async (data) => {
  console.log('pwcheck : ', data);
  try {
    const response = await axios({
      url: 'http://13.125.20.30:8080/api/user/checkpwd',
      method: 'post',
      data: {
        password: data.password,
      },
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    console.log('비번체크', response);
  } catch (err) {
    console.log('err:', err);
  }
};

// editMyInfo
export const editMyInfo = async (data) => {
  console.log('editMyInfo : ', data);
  try {
    const response = await axios({
      url: `http://13.125.20.30:8080/api/mypage`,
      method: 'put',
      data: {
        newPassword: data.newInfo.newPassword,
        newPasswordConfirm: data.newInfo.newPasswordConfirm,
        nickname: data.newInfo.nickname,
        image: data.newInfo.image,
        introduction: data.newInfo.introduction,
      },
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    console.log('정보수정', response);
  } catch (err) {
    console.log('정보수정 err:', err);
  }
};
