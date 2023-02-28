import { api } from './api';

// getPostList
export const getPostList = async (data) => {
  const response = await api.get(`/api/post/${data.id}`, {
    headers: {
      Authorization: data.token,
    },
  });
  return response.data;
};

export const addQuestion = async ({ id, content, token }) => {
  try {
    const response = await api.post(`/api/post/${id}`, content, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// pw check
export const passwordCheck = async (data) => {
  console.log('pwcheck : ', data);
  try {
    const response = await api({
      url: '/api/user/checkpwd',
      method: 'post',
      data: {
        password: data.password,
      },
      headers: {
        Authorization: data.token,
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
    const response = await api({
      url: `/api/mypage`,
      method: 'put',
      data: {
        newPassword: data.newInfo.newPassword,
        newPasswordConfirm: data.newInfo.newPasswordConfirm,
        nickname: data.newInfo.nickname,
        image: data.newInfo.image,
        introduction: data.newInfo.introduction,
      },
      headers: {
        Authorization: data.token,
      },
    });
    console.log('정보수정', response);
  } catch (err) {
    console.log('정보수정 err:', err);
  }
};

// img upload
export const imgUpload = async (data) => {
  console.log('imgUpload : ', data);
  try {
    const response = await api({
      url: `/api/upload`,
      method: 'post',
      data: data.formImg,
      headers: {
        Authorization: data.token,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('사진', response);
  } catch (err) {
    console.log('사진 err:', err);
  }
};

export const getMyInfo = async (data) => {
  try {
    const response = await api({
      url: `/api/user/info`,
      method: 'get',
      headers: {
        Authorization: data,
      },
    });
    console.log('getMyInfo : ', response);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
