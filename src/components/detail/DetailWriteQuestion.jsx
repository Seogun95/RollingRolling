import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { useState } from 'react';
import { useRef } from 'react';

function DetailWriteQuestion() {
  const [content, setContent] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const anon = useRef();

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const submitPostContent = async (e) => {
    e.preventDefault();
    //console.log(content, anon.current.checked);
  };

  return (
    <WriteQuestionContainer>
      <QuestionFormContainer onSubmit={submitPostContent}>
        <label>질문하기</label>
        <textarea value={content} onChange={changeContent} />
        <QuestionSubmitContainer>
          <input type="checkbox" value={anonymous} ref={anon} />
          <label>익명으로 작성</label>
          <Button w={'60px'} bg={'#58793e'} color={'white'}>
            확인
          </Button>
        </QuestionSubmitContainer>
      </QuestionFormContainer>
      <QuestionContainer>
        <label>내가 남긴 질문</label>
        <QuestionBox>
          질문한 내역이 없습니다. 궁금한 점을 물어보세요 !
        </QuestionBox>
        {/* {data.length === 0 ? (
          <QuestionBox>
            질문한 내역이 없습니다. 궁금한 점을 물어보세요 !
          </QuestionBox>
        ) : (
          data.map((list) => (
            <QuestionBox key={list.postid}>{list.content}</QuestionBox>
          ))
        )} */}
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

const QuestionFormContainer = styled(QuestionContainer.withComponent('form'))``;

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
