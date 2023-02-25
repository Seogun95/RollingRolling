import React from 'react';
import styled from 'styled-components';
import {
  WriteQuestionContainer,
  QuestionContainer,
  QuestionBox,
} from './DetailWriteQuestion';

function DetailMyQuestion() {
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
