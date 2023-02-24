import React from 'react';
import styled from 'styled-components';
import Button from '../components/Elements/Button';

export default function WelcomePage() {
  return (
    <TitleWrapper>
      <StP>친구에게 질문을 롤링페이퍼로.</StP>
      <BtnContainer>
        <Button default>시작하기</Button>
      </BtnContainer>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1yHyD%2Fbtr0Iuzkeum%2FmDwgNvcv2Pf6QKLf1MNoik%2Fimg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const StP = styled.p`
  font-size: 50px;
`;

const BtnContainer = styled.div`
  margin-top: 13%;
`;

// RollingRolling
