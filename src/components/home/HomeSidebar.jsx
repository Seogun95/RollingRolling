import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useOutsideClick from '../../hooks/useOutsideClick';
import Button from '../elements/Button';
import { Link, useLocation } from 'react-router-dom';
import { BsPersonLinesFill } from 'react-icons/bs';
import defaultImg from '../../style/img/example.png';
import { MdEmail } from 'react-icons/md';
import { SlLogout } from 'react-icons/sl';

export default function HomeSidebar(props) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => {
    props.setState(false);
  });

  //페이지가 이동되었을때 사이드바 닫기
  const location = useLocation();
  useEffect(() => {
    props.setState(false);
  }, [location.pathname]);

  //스크롤이 감지되었을때 사이바 닫기
  useEffect(() => {
    function handleScroll() {
      props.setState(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props]);

  function toggleSidebar() {
    props.setState((prevShowSide) => !prevShowSide);
  }

  return (
    <>
      <SidebarContainer
        showSidebar={props.state}
        isOpen={props.state}
        ref={modalRef}
      >
        <CloseButton onClick={toggleSidebar}>x</CloseButton>
        <h2>롤링롤링</h2>
        <Info>
          <ProfileDiv>
            {props.image && props.image !== 'null' ? (
              <img src={props.image} alt=""></img>
            ) : (
              <img src={defaultImg} alt=""></img>
            )}
            <ProfileInfo>
              <p>닉네임 : {props.nickname}</p>
              <p>아이디 : {props.username}</p>
            </ProfileInfo>
          </ProfileDiv>
        </Info>

        <IconContainer>
          <Icon>
            <MdEmail />
          </Icon>
          {props.email}
        </IconContainer>

        <IconContainer>
          <Icon>
            <BsPersonLinesFill />
          </Icon>
          <Link to={`${`/home/${props.username}`}`}>마이페이지</Link>
        </IconContainer>

        <IconContainer>
          <Icon>
            <SlLogout />
          </Icon>
          <Button mypage onClick={props.logoutHandler}>
            로그아웃
          </Button>
        </IconContainer>
      </SidebarContainer>
    </>
  );
}

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
  width: 15rem;
  padding: 0.875rem;
  border-radius: 0.25rem 0 0.25rem 0.25rem;
  ${(props) => props.theme.DarkBlur}
  opacity: 0;
  transition: transform 0.3s linear, opacity 0.3s linear;
  color: white;
  pointer-events: none;
  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
      opacity: 1;
      pointer-events: visible;
    `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    opacity: 0.8;
  }
`;

const Info = styled.div`
  margin-top: 1rem;
`;

const ProfileDiv = styled.div`
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 0px white;
`;

const ProfileInfo = styled.div`
  margin: 1rem 0 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
`;

const Icon = styled.div`
  width: 2rem;
`;
