import { useParams } from 'react-router-dom';
import { api } from './api';

// sidebar 게시글 user정보
export const getMyPostList = async () => {
  const response = await api.get('/api/post/mypost/');
  return response.data;
};
// 질문하기
// api/post/{username : 게시판 user}
export const createPost = async () => {
  const response = await api.get('/api/post/');
  return response.data;
};

// 2. A사람의 모든 질문 가져오기
export const getPostList = async () => {
  const response = await api.get('/postList');
  return response.data;
};
