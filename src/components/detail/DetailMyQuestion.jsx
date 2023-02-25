import React from 'react';
import styled from 'styled-components';

function DetailMyQuestion() {
  // 구민이 작성~~
  return <div>DetailMyQuestion</div>;
}

export default DetailMyQuestion;

// 구민이가 작성해놓은것~~
const WrittenQuestionContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  margin-top: 4%;
  flex-direction: column;
  h2 {
    align-self: flex-start;
    margin: 0 0 1rem 4.5rem;
  }
`;

const WrittenQuestionBox = styled.div`
  font-size: 100px;
  width: 85%;
  min-height: 350px;
  border-radius: 1rem;
  background-color: white;
  overflow: auto;
`;

const StP = styled.p`
  font-size: 34px;
  margin: 0 0 1rem 4rem;
  align-self: flex-start;
`;
