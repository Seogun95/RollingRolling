import React from 'react';
import styled from 'styled-components';
import Button from '../components/elements/Button';
import { useNavigate } from 'react-router-dom';
import MainTyping from '../components/home/MainTyping';
export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <WelcomeContainer>
      <WelcomeTitle>
        <MainTyping />
      </WelcomeTitle>
      <WelcomBtnContainer>
        <Button defaultBorder onClick={() => navigate('/login')}>
          시작하기
        </Button>
      </WelcomBtnContainer>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div`
  ${(props) => props.theme.FlexCol}
  width: 90%;
`;

const WelcomeTitle = styled.div`
  font-size: 3.125rem;
  position: relative;
  color: white;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const WelcomBtnContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  z-index: 1;
`;
