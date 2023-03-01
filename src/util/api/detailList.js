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
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// editMyInfo
export const editMyInfo = async (data) => {
  // console.log('editMyInfo api data : ', data);
  try {
    const response = await api({
      url: `/api/mypage`,
      method: 'put',
      data: {
        newPassword: data.newInfo.newPassword,
        newPasswordConfirm: data.newInfo.newPasswordConfirm,
        nickname: data.newInfo.nickname,
        image: data.newInfo.image,
        email: data.newInfo.email,
        introduction: data.newInfo.introduction,
      },
      headers: {
        Authorization: data.token,
      },
    });
    return response.data;
  } catch (err) {
    console.log('정보수정 err:', err);
  }
};

// img upload
export const imgUpload = async (data) => {
  // console.log('imgUpload : ', data); //formData{}
  try {
    const response = await api.post(`/api/upload`, data.img, {
      headers: {
        Authorization: data.token,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('사진', response.data);
    return response.data;
  } catch (err) {
    console.log('사진 err:', err);
  }
};

// question - comment 작성
export const addComment = async ({ id, content, token }) => {
  try {
    const response = await api.post(`/api/comment/${id}`, content, {
      headers: {
        Authorization: token,
      },
    });
    console.log('comment', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
