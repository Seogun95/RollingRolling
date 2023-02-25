import { api } from './api';

// 내가 A사람의 게시판 들어갔을때
// 1. 내가 작성한 질문 가져오기
export const getMyPostList = async () => {
  const response = await api.get('/myPostList');
  return response.data;
};
// 2. A사람의 모든 질문 가져오기
export const getPostList = async () => {
  const response = await api.get('/postList');
  return response.data;
};
