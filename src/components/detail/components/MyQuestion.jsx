import React from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { RiUser3Line, RiTimer2Line } from 'react-icons/ri';
import { FaRegCommentAlt } from 'react-icons/fa';
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
        <NickName bg={'#58793e'} color={'white'}>
          <div>
            <RiUser3Line />
            {props.nickname}
          </div>
        </NickName>
      </QuestionBoxHead>
      <Contents>{props.content}</Contents>
      <AnswerContainer isShow={display}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 작성해주세요"
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
      <QuestionBoxBotton bg={'#58793e'} color={'white'}>
        <div>
          <RiTimer2Line />
          <Moment locale="ko" fromNow>
            {props.date}
          </Moment>
          <AnswerText onClick={writeComment}>
            <FaRegCommentAlt />
          </AnswerText>
        </div>
      </QuestionBoxBotton>
    </QuestionBox>
  );
}
export default MyQuestion;

const AnswerText = styled.span`
  margin-top: 1px;
  margin-left: auto;
  cursor: pointer;
`;

const AnswerContainer = styled.div`
  background-color: royalblue;
  ${(props) => props.theme.FlexCol};
  width: 100%;
  margin-top: 10px;
  background-color: ${(props) => props.theme.CL.brandColorLight};

  /* box-shadow: 4px 4px 0px 1px ${(props) => props.theme.CL.brandColor}; */

  display: ${(props) => (props.isShow === true ? 'block' : 'none')};
  > textarea {
    width: 100%;
    min-height: 20px;

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
