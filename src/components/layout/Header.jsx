import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../elements/Button';
import logo from '../../style/img/logo.svg';
import HomeSidebar from '../home/HomeSidebar';
import Cookies from 'js-cookie';
import { HomeTokenCheck } from '../../hooks/useTokenCheck';
import defaultImg from '../../style/img/example.png';
import { useLoginUserCheck } from '../../hooks/useLoginUserCheck';

export default function Header() {
  const loginInfo = useLoginUserCheck();

  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  HomeTokenCheck(navigate);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoutHandler = () => {
    Cookies.remove('accessJWTToken');
    navigate('/');
  };

  const [showSidebar, setShowSidebar] = useState(false);
  function toggleSidebar() {
    setShowSidebar((prveShowSide) => !prveShowSide);
  }

  return (
    <HeaderStyles
      className={isScrolled ? 'isScrolled' : !isScrolled ? '' : 'isScrolled'}
    >
      <HeaderContainer>
        <HeaderLogoContainer>
          <Link to="/home">
            <LogoImg src={logo} alt="롤링롤링" />
          </Link>
        </HeaderLogoContainer>
        <HeaderUserNameContainer>
          <span className="nickname">{loginInfo?.nickname}</span>
          <span className="welcomspan">님 환영합니다!</span>
        </HeaderUserNameContainer>

        <HeaderMyProfileContainer>
          <Button onClick={toggleSidebar}>
            {loginInfo?.image && loginInfo?.image !== 'null' ? (
              <img src={loginInfo.image} alt=""></img>
            ) : (
              <img src={defaultImg} alt=""></img>
            )}
          </Button>

          <HomeSidebar
            image={loginInfo?.image}
            email={loginInfo?.email}
            nickname={loginInfo?.nickname}
            username={loginInfo?.username}
            state={showSidebar}
            setState={setShowSidebar}
            logoutHandler={logoutHandler}
          />
        </HeaderMyProfileContainer>
      </HeaderContainer>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  /* border-bottom: 1px solid #ebecf0; */
  /* ${(props) => (props.isScrolled ? DarkBlur : 'transparent')}; */
  transition: background-color 300ms ease-in-out;
  z-index: 9999;
  background: transparent;
  &.isScrolled {
    ${(props) => props.theme.DarkBlur};
    * {
      color: white !important;
    }
  }
`;
const HeaderContainer = styled.div`
  max-width: 1900px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
`;
const HeaderLogoContainer = styled.div`
  flex: 0 0 auto;
`;
const LogoImg = styled.img`
  height: 40px;
  display: block;
  /* filter: drop-shadow(0 0 2px black); */
`;

const HeaderUserNameContainer = styled.div`
  margin-left: auto;
  .nickname {
    color: #234b04;
  }
`;

const HeaderMyProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const DarkBlur = css`
  background: #161616aa;
  backdrop-filter: blur(3px);
`;
