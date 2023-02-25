import React from 'react';
import styled from 'styled-components';

function DetailMyQuestion() {
  // 구민이 작성~~
  return (
    <DetailMyQustionrWrapper>
      <MyNewQuestionContainer>
        <label>새 질문</label>
        <MyQuestionBox></MyQuestionBox>
      </MyNewQuestionContainer>

      <AnsweredQuestionContainer>
        <label>답변완료</label>
        <AnsweredQuestionBox></AnsweredQuestionBox>
        <AnsweredQuestionBox></AnsweredQuestionBox>
        <AnsweredQuestionBox></AnsweredQuestionBox>
      </AnsweredQuestionContainer>
    </DetailMyQustionrWrapper>
  );
}

export default DetailMyQuestion;

// 구민이가 작성해놓은것~~

const AnsweredQuestionBox = styled.div`
  ${(props) => props.theme.FlexRow};
  background-color: white;
  width: 100%;
  min-height: 9.375rem;
  border-radius: 30px;
  margin-bottom: 30px;
`;

const AnsweredQuestionContainer = styled.div`
  padding: 20px;
  border-radius: 30px;
  margin-top: 20px;
`;

const MyNewQuestionContainer = styled.div`
  padding: 20px;
  border-radius: 30px;
`;

const MyQuestionBox = styled.div`
  ${(props) => props.theme.FlexRow};
  background-color: white;
  width: 100%;
  min-height: 9.375rem;
  border-radius: 30px;
`;

const DetailMyQustionrWrapper = styled.div`
  margin: 30px;
  padding: 20px;
  overflow-y: auto;
  label {
    font-size: ${(props) => props.theme.FS.l};
    margin-bottom: 10px;
  }
`;
