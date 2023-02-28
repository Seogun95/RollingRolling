import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import Button from '../elements/Button';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { useQueryClient, useMutation } from 'react-query';
import { getPostList } from '../../util/api/detailList';
import MyQuestion from './MyQuestion';
import {
  WriteQuestionContainer,
  QuestionContainer,
  QuestionBox,
} from './DetailWriteQuestion';

function DetailMyQuestion({ data }) {
  const [display, setDisplay] = useState(false);
  const [comment, setComment] = useState('');
  const param = useParams();
  const token = Cookies.get('accessJWTToken');
  // GET 데이터 불러옴
  // const { data } = useQuery('getPost', () =>
  //   getPostList({ id: param.id, token })
  // );
  console.log('sss', data.bottomPost.content.length);

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
      const token = Cookies.get('accessJWTToken');
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
        {data.upperPost.map((list) => {
          return <MyQuestion key={list.postId} list={list} />;
        })}
      </NewQuestionContainer>

      <QuestionContainer>
        <label>답변완료</label>
        {data.bottomPost.content.length === 0 ? (
          <QuestionBox>아직 답변 완료된 질문이 없습니다.</QuestionBox>
        ) : (
          data.bottomPost.content.map((list) => {
            <MyQuestion key={list.postId} list={list} />;
          })
        )}
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
