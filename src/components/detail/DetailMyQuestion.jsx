import React from 'react';

import MyQuestion from './components/MyQuestion';
import {
  WriteQuestionContainer,
  QuestionContainer,
  EmptyQuestion,
} from './DetailWriteQuestion';
import QuestionBoxs from './components/QuestionBoxs';

function DetailMyQuestion({ data }) {
  return (
    <WriteQuestionContainer>
      <QuestionContainer>
        {data.upperPost.length !== 0 ? (
          <label>새 질문</label>
        ) : (
          <label>
            <EmptyQuestion>새로운 질문이 존재하지 않습니다.</EmptyQuestion>
          </label>
        )}

        {data.upperPost.map((list) => {
          return (
            <MyQuestion
              key={list.postId}
              nickname={list.nickname}
              content={list.content}
              date={list.createdAt}
              postId={list.postId}
            />
          );
        })}
      </QuestionContainer>

      <QuestionContainer>
        {data.bottomPost.content.length !== 0 ? (
          <label>답변완료</label>
        ) : (
          <label>
            <EmptyQuestion>아직 완료된 답변이 존재하지 않습니다.</EmptyQuestion>
          </label>
        )}
        {data.bottomPost.content.map((list) => (
          <QuestionBoxs
            key={list.postId}
            nickname={list.nickname}
            content={list.content}
            date={list.createdAt}
            postId={list.postId}
            comment={list.commentResponseDto}
          />
        ))}
      </QuestionContainer>
    </WriteQuestionContainer>
  );
}

export default DetailMyQuestion;
