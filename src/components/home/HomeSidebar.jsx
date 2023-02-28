import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useOutsideClick from '../../hooks/useOutsideClick';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import { BsPersonLinesFill } from 'react-icons/bs';
import defaultImg from '../../style/img/example.png';

export default function HomeSidebar(props) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => {
    props.setState(false);
  });

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
              <p>아이디 : {props.username}</p> <br />
            </ProfileInfo>
          </ProfileDiv>
        </Info>
        <Email>
          <p>이메일 : {props.email}</p>
        </Email>

        <BottomBox>
          <MyPage>
            <Link to={`${`/home/${props.username}`}`}>
              <BsPersonLinesFill /> &nbsp; 마이페이지
            </Link>
          </MyPage>
          <Button color={'white'} onClick={props.logoutHandler}>
            로그아웃
          </Button>
        </BottomBox>
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
  margin-top: 3%;
`;

const ProfileDiv = styled.div`
  box-shadow: 0px 2px 0px white;
  margin-left: 0%;
  padding-left: 10%;
  display: flex;
  align-items: center;
`;

const ProfileInfo = styled.div`
  margin: 10% 0 0 10%;
  display: flex;
  flex-direction: column;
`;

const Email = styled.div`
  display: flex;
  justify-content: center;
  margin: 9% 0 10% 0;
`;

const MyPage = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const BottomBox = styled.div``;
