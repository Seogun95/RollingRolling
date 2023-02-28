import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { useState } from 'react';

function MyQuestion({ list }) {
  const [display, setDisplay] = useState(false);
  // 답변 영역
  const writeComment = () => {
    setDisplay(!display);
  };
  return (
    <NewQuestionBox>
      <NewQuestionContent>
        <span>{list.nickname}</span>
        <h3>{list.content}</h3>
      </NewQuestionContent>
      <AnswerText onClick={writeComment}>답변하기</AnswerText>
      <AnswerContainer isShow={display}>
        <textarea></textarea>
        <WriterButtonContainer>
          <Button w={'80px'} bg={'#58793e'} color={'white'} size={'0.9rem'}>
            작성
          </Button>
        </WriterButtonContainer>
      </AnswerContainer>
    </NewQuestionBox>
  );
}
export default MyQuestion;

const NewQuestionBox = styled.div`
  width: 100%;
  margin-bottom: 0.625rem;
  padding: 1.5rem;
  border: none;
  border-radius: 30px;
  background-color: white;
  font-size: ${(props) => props.theme.FS.m};
`;

const NewQuestionContent = styled.div`
  margin-bottom: 150px;
`;

const AnswerText = styled.span`
  font-size: ${(props) => props.theme.FS.m};
  color: ${(props) => props.theme.CL.brandColor};
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const AnswerContainer = styled.div`
  background-color: royalblue;
  ${(props) => props.theme.FlexCol};
  width: 100%;
  height: 220px;
  margin-top: 10px;
  background-color: ${(props) => props.theme.CL.brandColorLight};
  border-radius: 30px;
  box-shadow: 4px 4px 0px 1px ${(props) => props.theme.CL.brandColor};

  display: ${(props) => (props.isShow === true ? 'block' : 'none')};
  > textarea {
    width: 100%;
    height: 150px;
    padding: 1.25rem;
    border-radius: 30px;
    border: none;
    background-color: transparent;
    font-size: ${(props) => props.theme.FS.m};
    resize: none;
    outline: none;
  }
`;

const WriterButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  > button {
    margin-right: 30px;
  }
`;
