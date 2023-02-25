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
