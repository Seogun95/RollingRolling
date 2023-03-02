import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useBgAnimation } from '../../hooks/useBgAnimation';
import logo from '../../style/img/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { LoginTokenCheck } from '../../hooks/useTokenCheck';
import bg1 from '../../style/img/bg1.jpeg';
import bg2 from '../../style/img/bg2.jpeg';

export default function MainBgLayout(props) {
  const [backgrounds, setBackgrounds] = useState([bg1, bg2]);
  const navigate = useNavigate();
  LoginTokenCheck(navigate);

  useEffect(() => {
    const shuffledBackgrounds = shuffleArray(backgrounds);
    setBackgrounds(shuffledBackgrounds);
  }, []);

  const backgroundIndex = useBgAnimation(backgrounds);

  return (
    <WelcomeTitleWrapper>
      {backgrounds.map((url, index) => (
        <CSSTransition
          key={index}
          in={backgroundIndex === index}
          timeout={3000}
          classNames="fade"
          unmountOnExit
        >
          <Background bg={url} />
        </CSSTransition>
      ))}
      <WelcomeLogoContainer>
        <Link to="/">
          <LogoImg src={logo} alt="롤링롤링" />
        </Link>
      </WelcomeLogoContainer>
      {props.children}
    </WelcomeTitleWrapper>
  );
}

const WelcomeTitleWrapper = styled.div`
  ${(props) => props.theme.FlexCol}
  width: 100vw;
  height: 100vh;

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 3s ease-in-out;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }
`;

const WelcomeLogoContainer = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
`;
const LogoImg = styled.img`
  height: 70px;
  display: block;
  filter: drop-shadow(0 0 2px black);
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  position: absolute;
`;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
