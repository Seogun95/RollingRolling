import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { RiUser3Line, RiTimer2Line } from 'react-icons/ri';
import Button from '../../elements/Button';

export default function QuestionBoxs(props) {
  //console.log(props.comment.content);

  return (
    <DoneContainer>
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
        <QuestionBoxBotton>
          <div>
            <RiTimer2Line />
            <Moment locale="ko" fromNow>
              {props.date}
            </Moment>
            {props.children}
          </div>
        </QuestionBoxBotton>
      </QuestionBox>
      {props.comment ? (
        <CommentBox>
          <QuestionBoxHead>
            <NickName>
              <div>
                <RiUser3Line />
                {props.comment?.nickname}
              </div>
            </NickName>
          </QuestionBoxHead>
          <Contents>{props.comment?.content}</Contents>
          <QuestionBoxBotton>
            <div>
              <RiTimer2Line />
              <Moment locale="ko" fromNow>
                {props.comment?.createdAt}
              </Moment>
            </div>
          </QuestionBoxBotton>
        </CommentBox>
      ) : (
        '아직 답변이 없습니다.'
      )}
    </DoneContainer>
  );
}

const DoneContainer = styled.div`
  background-color: lightblue;
  ${(props) => props.theme.FlexCol};
  margin-bottom: 50px;
`;
// comment
const CommentBox = styled.div`
  width: 100%;
`;

export const QuestionBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 2rem;
  margin-bottom: 1.25rem;
  border: none;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.CL.brandColorLight};
  font-size: ${(props) => props.theme.FS.m};
  box-shadow: 0 1px 10px #0000008a;
`;

export const QuestionBoxHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 0.8125rem 0.4375rem 0.4688rem 1rem;
  border-radius: 0.625rem 0.625rem 0 0;
`;

export const NickName = styled.span`
  padding: 0.3125rem 0.625rem;
  border-radius: 1.25rem;
  font-size: ${(props) => props.theme.FS.s};
  color: white;
  background-color: ${(props) => props.theme.CL.brandColor};
  div {
    ${(props) => props.theme.FlexRow};
    gap: 5px;
  }
`;

export const Contents = styled.p`
  padding: 10px 20px 15px;
  line-height: 2;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.FS.m};
  white-space: pre-wrap;
`;

export const QuestionBoxBotton = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5938rem 0.875rem;
  border-radius: 0 0 0.625rem 0.625rem;
  line-height: 1;
  background-color: ${(props) => props.theme.CL.brandColor};
  font-size: ${(props) => props.theme.FS.s};
  color: white;
  div {
    ${(props) => props.theme.FlexRow};
    justify-content: flex-start;
    gap: 5px;
  }
`;
