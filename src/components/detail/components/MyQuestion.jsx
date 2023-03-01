import React from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { RiUser3Line, RiTimer2Line } from 'react-icons/ri';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { addComment } from '../../../util/api/detailList';
import {
  QuestionBox,
  QuestionBoxHead,
  NickName,
  Contents,
  QuestionBoxBotton,
} from './QuestionBoxs';

function MyQuestion(props) {
  const [comment, setComment] = useState('');
  const [display, setDisplay] = useState(false);

  // 답변 영역
  const writeComment = () => {
    setDisplay(!display);
  };

  // 답변 작성
  // => 답변 작성되면 답변 완료 쪽으로 바로 이동
  const queryClient = useQueryClient();
  const muation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('getPost');
    },
  });

  const submitComment = () => {
    if (comment !== '') {
      // 토큰
      const token = Cookies.get('accessJWTToken');
      const resultComment = comment.replace(/(?:\n)/g, '\n');

      muation.mutate({
        id: props.postId,
        token: token,
        content: { content: resultComment },
      });
      setDisplay(!display);
    }
  };

  return (
    <QuestionBox>
      <QuestionBoxHead>
        <NickName>
          <div>
            <RiUser3Line />
            {props.nickname}
          </div>
        </NickName>
      </QuestionBoxHead>
      <Contents>{props.content}</Contents>
      <AnswerText onClick={writeComment}>답변하기</AnswerText>
      <AnswerContainer isShow={display}>
        <textarea
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
      <QuestionBoxBotton>
        <div>
          <RiTimer2Line />
          <Moment locale="ko" fromNow>
            {props.createdAt}
          </Moment>
        </div>
      </QuestionBoxBotton>
    </QuestionBox>
  );
}
export default MyQuestion;

const AnswerText = styled.div`
  ${(props) => props.theme.FlexCol};
  align-items: flex-end;
  font-size: ${(props) => props.theme.FS.m};
  color: ${(props) => props.theme.CL.brandColor};
  padding: 1rem;
  cursor: pointer;
`;

const AnswerContainer = styled.div`
  background-color: royalblue;
  ${(props) => props.theme.FlexCol};
  width: 100%;
  margin-top: 10px;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.CL.brandColorLight};
  border-radius: 30px;
  /* box-shadow: 4px 4px 0px 1px ${(props) => props.theme.CL.brandColor}; */

  display: ${(props) => (props.isShow === true ? 'block' : 'none')};
  > textarea {
    width: 100%;
    min-height: 20px;
    padding: 1.25rem;
    border-radius: 0.625rem;
    border: 1px solid ${(props) => props.theme.CL.brandColor};
    background-color: transparent;
    font-size: ${(props) => props.theme.FS.m};
    resize: none;
  }
`;

const WriterButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;
