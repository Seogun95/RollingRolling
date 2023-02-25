import React from 'react';
import styled from 'styled-components';

function DetailWriteQuestion() {
  return (
    <WriteQuestionContainer>
      <QuestionContainer>
        <label>질문하기</label>
        <textarea />
      </QuestionContainer>
      <QuestionContainer>
        <label>내가 남긴 질문</label>
        <QuestionBox>dajeong 님에게 남긴 질문이 없습니다.</QuestionBox>
        <QuestionBox>질문한 내용~~</QuestionBox>
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

const WriteQuestionContainer = styled.div`
  background-color: #81a36648;
  border-radius: 30px;
`;
const QuestionContainer = styled.div`
  ${(props) => props.theme.FlexCol};
  padding: 20px;

  label {
    width: 100%;
    font-size: ${(props) => props.theme.FS.l};
    font-weight: bold;
    color: #58793e;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    min-height: 9.375rem;
    padding: 20px;
    border: none;
    border-radius: 30px;
    font-size: ${(props) => props.theme.FS.m};
    resize: none;
    &:focus {
      outline: 2px solid #58793e;
    }
  }
`;

const QuestionBox = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
  padding: 20px;
  border: none;
  border-radius: 30px;
  background-color: white;
`;
