import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import Input from '../components/elements/Input.jsx';
import Button from '../components/elements/Button';
import { useNavigate } from 'react-router-dom';
import useLoginInput from '../hooks/useLoginInput.jsx';

function LoginPage() {
  const navigate = useNavigate();
  const idRegex = /^(?=.*?[0-9])(?=.*?[a-z])[a-zA-Z0-9]{4,10}$/;
  const [inputId, inputIdHandler, alertId, checkIdRegex] = useLoginInput(
    '',
    '',
    '아이디는 영어 소문자, 숫자 조합의 4-10자의 형식으로 입력해주세요.',
    '사용 가능한 아이디 입니다.',
    idRegex
  );

  const pwRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,15}$/;
  const [inputPw, inputPwHandler, alertPw, checkPwRegex] = useLoginInput(
    '',
    '비밀번호를 입력해주세요.',
    '영문과 숫자, 특수문자 조합의 8-20자의 비밀번호를 사용해야 합니다.',
    '사용 가능한 비밀번호 입니다.',
    pwRegex
  );

  //스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const moveRegistrationPg = () => {
    navigate('/signup');
  };

  return (
    <LoginModalWrapper height={'500px'}>
      <LoginModal>
        <LoginText>로그인</LoginText>
        <LoginInputContainer>
          <Input
            text={'아이디'}
            value={inputId}
            onChange={inputIdHandler}
            type={'id'}
            len={'10'}
          >
            <FaUserAlt />
          </Input>
          <LoginAlertSpan height={'25px'} isIdOrPw={checkIdRegex}>
            {alertId}
          </LoginAlertSpan>
          <Input
            text={'비밀번호'}
            value={inputPw}
            onChange={inputPwHandler}
            type={'password'}
            len={'15'}
          >
            <FaLock />
          </Input>
          <LoginAlertSpan isIdOrPw={checkPwRegex} height={'50px'}>
            {alertPw}
          </LoginAlertSpan>
          <Button bg={'#8CB46D'} h={'3.125rem'} size={'0.9rem'}>
            로그인
          </Button>
        </LoginInputContainer>

        <LoginGoToSignup>
          <span>RollingRolling 회원이 아니신가요? </span>
          <Button
            onClick={moveRegistrationPg}
            color={'black'}
            size={'0.9rem'}
            w={'auto'}
          >
            가입하기
          </Button>
        </LoginGoToSignup>
      </LoginModal>
    </LoginModalWrapper>
  );
}

export default LoginPage;

export const LoginModalWrapper = styled.div`
  ${(props) => props.theme.FlexRow}
  position: fixed;
  inset: 0;
  z-index: 100;
  background: url('https://i.imgur.com/GFBmTcM.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginText = styled.h1`
  font-size: ${(props) => props.theme.FS.xl};
`;

export const LoginModal = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #ffffff76;
  backdrop-filter: blur(3px);
  padding: 3rem;
  border-radius: 1rem;
  width: 500px;
  height: ${(props) => props.height};
`;

export const LoginAlertSpan = styled.div`
  font-size: 0.8rem;
  padding: 0.4rem 0.5rem 0.5rem;
  height: ${(props) => props.height};
  color: ${(props) => (props.isIdOrPw ? '#58793e' : 'tomato')};
`;

export const LoginInputContainer = styled.form`
  ${(props) => props.theme.FlexCol}
  align-items: flex-start;
  margin: 1rem 0;
`;

export const LoginGoToSignup = styled.div`
  ${(props) => props.theme.FlexRow}
  justify-content: flex-end;
  span {
    font-size: ${(props) => props.theme.FS.xs};
    color: #000000;
    opacity: 0.6;
  }
`;
