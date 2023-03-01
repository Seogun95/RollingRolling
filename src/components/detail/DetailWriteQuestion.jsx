import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { useState } from 'react';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import { addQuestion, getPostList } from '../../util/api/detailList';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { useLoginUserCheck } from '../../hooks/useLoginUserCheck';
import { FcUnlock, FcLock } from 'react-icons/fc';
import QuestionBoxs from './components/QuestionBoxs';

function DetailWriteQuestion() {
  const loginInfo = useLoginUserCheck();
  const [question, setQuestion] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const anonymous = useRef();
  const param = useParams();
  const token = Cookies.get('accessJWTToken');

  // GET 데이터 불러옴
  const { data } = useQuery('getPost', () =>
    getPostList({ id: param.id, token })
  );

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
        <label>
          <NicknameSpan>{data.user.nickname}</NicknameSpan>님에게 질문하기
        </label>
        <textarea name="content" value={question} onChange={changeContent} />
        <QuestionSubmitContainer>
          <input
            type="checkbox"
            ref={anonymous}
            id={'anonymous'}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {/* <lable style={{ paddingRight: '5px' }}>익명으로 작성</lable> */}
          <label htmlFor={'anonymous'}>
            {isChecked ? <FcLock fill="tomato" /> : <FcUnlock />}
          </label>

          <Button w={'60px'} bg={'#58793e'} color={'white'}>
            확인
          </Button>
        </QuestionSubmitContainer>
      </QuestionFormContainer>
      <QuestionContainer>
        {data.upperPost.length !== 0 && (
          <label>
            <NicknameSpan>내가</NicknameSpan> 남긴 질문
          </label>
        )}
        {data?.upperPost.map((item, i) => (
          <QuestionBoxs
            key={i}
            nickname={item.nickname}
            content={item.content}
            date={item.createdAt}
          />
        ))}
      </QuestionContainer>
      <QuestionContainer>
        {data.bottomPost.content.length !== 0 ? (
          <label>
            <NicknameSpan>{data.user.nickname}</NicknameSpan>님에게 작성된 질문
          </label>
        ) : (
          <label>
            <EmptyQuestion>
              다른 사람이<NicknameSpan> {data.user.nickname} </NicknameSpan>
              님에게 질문을 작성하지 않았어요
            </EmptyQuestion>
          </label>
        )}
        {data?.bottomPost.content.map((item, i) => (
          <QuestionBoxs
            key={i}
            nickname={item.nickname}
            content={item.content}
            date={item.createdAt}
            postId={item.postId}
            comment={item.commentResponseDto}
          />
        ))}
      </QuestionContainer>
    </WriteQuestionContainer>
  );
}

export default DetailWriteQuestion;

export const WriteQuestionContainer = styled.div`
  background-color: ${(props) => props.theme.CL.brandColorLight};
  border-radius: 30px;
`;

export const NicknameSpan = styled.span`
  color: #aa7d0a;
  padding-left: 0.3125rem;
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

export const EmptyQuestion = styled.div`
  ${(props) => props.theme.FlexRow};
`;
const QuestionSubmitContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  justify-content: end;
  margin-top: 10px;

  > input {
    display: none;
  }
  input:checked + label,
  input + label:hover:not(input:checked + label) {
    animation: 4.72s infinite shake;
    @keyframes shake {
      0% {
        transform: translate(0, 0);
      }
      1.78571% {
        transform: translate(5px, 0);
      }
      3.57143% {
        transform: translate(0, 0);
      }
      5.35714% {
        transform: translate(5px, 0);
      }
      7.14286% {
        transform: translate(0, 0);
      }
      8.92857% {
        transform: translate(5px, 0);
      }
      10.71429% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
  > label {
    width: auto;
    font-size: ${(props) => props.theme.FS.m};
    margin: 4px 10px 0 0;
    svg {
      font-size: ${(props) => props.theme.FS.xl};
    }
  }
`;
