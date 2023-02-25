import React from 'react';
import { useQuery } from 'react-query';
import { getMyPostList } from '../../util/api/detailList';

import {
  WriteQuestionContainer,
  QuestionContainer,
  QuestionBox,
} from './DetailWriteQuestion';

function DetailMyQuestion() {
  // 내가 A사람의 게시판 들어갔을때
  // 1. 내가 작성한 질문 가져오기
  // const { isLoading, isError, data } = useQuery('myPostList', getMyPostList);
  //console.log(data);

  return (
    <WriteQuestionContainer>
      <QuestionContainer>
        <label>새 질문</label>
        <QuestionBox>질문질문!!</QuestionBox>
      </QuestionContainer>

      <QuestionContainer>
        <label>답변완료</label>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
        <QuestionBox></QuestionBox>
      </QuestionContainer>
    </WriteQuestionContainer>
  );
}

export default DetailMyQuestion;
