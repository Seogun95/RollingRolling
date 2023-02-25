import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getMyPostList } from '../../util/api/detailList';
import { useParams } from 'react-router-dom';
import Button from '../elements/Button';

function DetailWriteQuestion() {
  // 내가 A사람의 게시판 들어갔을때
  // 1. 질문하기

  // 2. 내가 남긴 질문 가져오기

  // 파라미터로 해당 게시글의 회원id 가져오기
  const param = useParams();
  // console.log(param); //{id: '55'} 게시글의 회원id

  // 로그인한 유저가 이 게시글에 남긴 질문 가져오기
  const { isLoading, isError, data } = useQuery('myPostList', getMyPostList);

  if (isLoading) {
    return <div>로딩중!!...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <WriteQuestionContainer>
      <QuestionContainer>
        <label>질문하기</label>
        <textarea />
        <QuestionSubmitContainer>
          <input type="radio" value="익명" />
          <label>익명으로 작성</label>
          <Button w={'60px'} bg={'#58793e'} color={'white'}>
            확인
          </Button>
        </QuestionSubmitContainer>
      </QuestionContainer>
      <QuestionContainer>
        <label>내가 남긴 질문</label>
        {data.length === 0 ? (
          <QuestionBox>
            질문한 내역이 없습니다. 궁금한 점을 물어보세요 !
          </QuestionBox>
        ) : (
          data.map((list) => (
            <QuestionBox key={list.postid}>{list.content}</QuestionBox>
          ))
        )}
      </QuestionContainer>
      <QuestionContainer>
        <label> dajeong 님에게 작성된 질문</label>
        <QuestionBox>질문한 내용~~</QuestionBox>
        <QuestionBox>질문한 내용~~</QuestionBox>
      </QuestionContainer>
    </WriteQuestionContainer>
  );
}

export default DetailWriteQuestion;

export const WriteQuestionContainer = styled.div`
  background-color: ${(props) => props.theme.CL.brandColorLight};
  border-radius: 30px;
`;

export const QuestionContainer = styled.div`
  ${(props) => props.theme.FlexCol};
  padding: 1.25rem;

  label {
    width: 100%;
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.FS.l};
    font-weight: bold;
    color: ${(props) => props.theme.CL.brandColor};
  }
  textarea {
    width: 100%;
    min-height: 9.375rem;
    padding: 1.25rem;
    border: none;
    border-radius: 30px;
    font-size: ${(props) => props.theme.FS.m};
    resize: none;
    &:focus {
      outline: 2px solid ${(props) => props.theme.CL.brandColor};
    }
  }
`;

export const QuestionBox = styled.div`
  width: 100%;
  height: 10rem;
  margin-bottom: 0.625rem;
  padding: 1.25rem;
  border: none;
  border-radius: 30px;
  background-color: white;
  font-size: ${(props) => props.theme.FS.m};
`;

const QuestionSubmitContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  justify-content: end;
  margin-top: 10px;

  > input {
    margin: 0;
    margin-right: 10px;
  }
  > label {
    width: auto;
    font-size: ${(props) => props.theme.FS.m};
    margin: 0;
    margin-right: 10px;
  }
`;
