import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { useState } from 'react';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import { addQuestion, getPostList } from '../../util/api/detailList';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient, useMutation } from 'react-query';

function DetailWriteQuestion() {
  const [question, setQuestion] = useState('');
  const anonymous = useRef();
  const param = useParams();
  const token = Cookies.get('accessJWTToken');

  // GET 데이터 불러옴
  const { data } = useQuery('getPost', () =>
    getPostList({ id: param.id, token })
  );

  console.log(data);

  const changeContent = (e) => {
    setQuestion(e.target.value);
  };
  const queryClient = useQueryClient();
  //POST 데이터 추가
  const muation = useMutation(addQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries('getPost');
    },
  });

  const submitPostContent = (e) => {
    e.preventDefault();
    if (question !== '') {
      const form = {
        content: question,
        anonymous: anonymous.current.checked,
      };
      muation.mutate({ id: param.id, token: token, content: form });
      setQuestion('');
      anonymous.current.checked = false;
    }
  };

  return (
    <WriteQuestionContainer>
      <QuestionFormContainer onSubmit={submitPostContent}>
        <label>질문하기</label>
        <textarea name="content" value={question} onChange={changeContent} />
        <QuestionSubmitContainer>
          <input type="checkbox" ref={anonymous} />
          <label>익명으로 작성</label>
          <Button w={'60px'} bg={'#58793e'} color={'white'}>
            확인
          </Button>
        </QuestionSubmitContainer>
      </QuestionFormContainer>
      <QuestionContainer>
        <label>내가 남긴 질문</label>

        {data?.upperPost.map((item) => (
          <QuestionBox key={item.id}>
            <span>{item.nickname}</span>
            <h3>{item.content}</h3>
          </QuestionBox>
        ))}
      </QuestionContainer>
      <QuestionContainer>
        <label> dajeong 님에게 작성된 질문</label>
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
