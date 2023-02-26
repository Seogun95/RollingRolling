import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import Button from '../elements/Button';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { useCookies } from 'react-cookie';
import {
  WriteQuestionContainer,
  QuestionContainer,
  QuestionBox,
} from './DetailWriteQuestion';

function DetailMyQuestion() {
  const [display, setDisplay] = useState(false);
  const [comment, setComment] = useState('');
  const param = useParams();
  const [cookies, setCookie] = useCookies();

  // 답변 textarea
  const answer = useRef();
  // 답변 영역
  const writeComment = () => {
    setDisplay(!display);
  };

  // 답변 작성
  // => 답변 작성되면 답변 완료 쪽으로 바로 이동
  const submitComment = () => {
    if (comment !== '') {
      // 토큰 헤더 저장
      const token = cookies.accessJWTToken.split(' ')[1];
      // const { isLoading, isError, data } = useQuery('getPost', () =>
      //   getPostList({ id: param.id, token })
      // );
      const resultComment = comment.replace(/(?:\n)/g, '<br />');
      setDisplay(!display);
    }
  };

  return (
    <WriteQuestionContainer>
      <NewQuestionContainer>
        <label>새 질문</label>
        <NewQuestionBox>
          <NewQuestionContent>
            질문이 길어지면 어디까지 길어질까요 더 길어지나요 칸에 비에 글자가
            작은걸까요 아니면 칸이 너무 큰걸까요
          </NewQuestionContent>
          <AnswerText onClick={writeComment}>답변하기</AnswerText>
          <AnswerContainer isShow={display}>
            <textarea
              ref={answer}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <WriterButtonContainer>
              <Button
                w={'80px'}
                bg={'#58793e'}
                color={'white'}
                size={'0.9rem'}
                onClick={submitComment}
              >
                작성
              </Button>
            </WriterButtonContainer>
          </AnswerContainer>
        </NewQuestionBox>
      </NewQuestionContainer>

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

const NewQuestionContainer = styled.div`
  ${(props) => props.theme.FlexCol};
  padding: 1.5rem;

  label {
    width: 100%;
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.FS.l};
    font-weight: bold;
    color: ${(props) => props.theme.CL.brandColor};
  }
`;

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
