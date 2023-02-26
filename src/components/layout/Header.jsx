import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../elements/Button';
import isLogin from '../../util/api/isLogin';
import { useCookies } from 'react-cookie';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin()) {
      alert('토큰이 만료되어 로그아웃 되었습니다');
      navigate('/');
    }
  }, [isLogin()]);

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
    removeCookie('accessJWTToken', { path: '/' });
    navigate('/');
  };

  return (
    <HeaderStyles
      className={isScrolled ? 'isScrolled' : !isScrolled ? '' : 'isScrolled'}
    >
      <HeaderContainer>
        <HeaderLogoContainer>
          <Link to="/">
            <Logo>롤링롤링</Logo>
          </Link>
        </HeaderLogoContainer>
        <HeaderLogOutContainer>
          <Button onClick={logoutHandler}>로그아웃</Button>
        </HeaderLogOutContainer>
        <HeaderMyProfileContainer>
          <Button>
            <img src="https://i.imgur.com/P2iWTOH.png" alt="" />
          </Button>
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
      color: white;
    }
  }
`;
const HeaderContainer = styled.div`
  max-width: 1830px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
`;
const HeaderLogoContainer = styled.div`
  flex: 0 0 auto;
`;

const Logo = styled.h1`
  margin: 0;
`;

const HeaderLogOutContainer = styled.div`
  margin-left: auto;
`;

const HeaderMyProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    max-width: 40px;
    max-height: 40px;
  }
`;

const DarkBlur = css`
  background: #161616aa;
  backdrop-filter: blur(3px);
`;
