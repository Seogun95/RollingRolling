import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useOutsideClick from '../../hooks/useOutsideClick';
import Button from '../elements/Button';
import useJwtDecode from '../../hooks/useJwtDecode';
import { Link } from 'react-router-dom';

export default function HomeSidebar(props) {
  const loginUserName = useJwtDecode();
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
        <Link to={`${`/home/${loginUserName}`}`}>마이페이지</Link>
        <p>{loginUserName}</p>

        <Button color={'white'} onClick={props.logoutHandler}>
          로그아웃
        </Button>
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
