import React, { useEffect } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { BsEmojiSunglassesFill, BsEnvelopeFill } from 'react-icons/bs';
import Button from '../components/elements/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../components/elements/Input';
import useLoginInput from '../hooks/useLoginInput';
import { api } from '../util/api/api';
import {
  LoginModalWrapper,
  LoginText,
  LoginModal,
  LoginInputContainer,
  LoginGoToSignup,
  LoginAlertSpan,
} from './LoginPage';

function SignupPage() {
  const navigate = useNavigate();

  const idRegex = /^(?=.*?[0-9])(?=.*?[a-z]).{5,}$/;
  const [inputId, inputIdHandler, alertId, checkIdRegex] = useLoginInput(
    '',
    '아이디를 입력해주세요.',
    '아이디는 영어 소문자, 숫자 조합의 5자 이상의 형식으로 입력해주세요.',
    '',
    idRegex
  );

  const pwRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/;
  const [inputPw, inputPwHandler, alertPw, checkPwRegex] = useLoginInput(
    '',
    '비밀번호를 입력해주세요.',
    '영문과 숫자, 특수문자 조합의 8-20자의 비밀번호를 사용해야 합니다.',
    '사용 가능한 비밀번호 입니다.',
    pwRegex
  );

  const [inputCheckPw, , alertCheckPw, doubleCheckPwRegex, checkSame] =
    useLoginInput(
      '',
      '비밀번호를 다시 입력해주세요',
      '비밀번호가 같지 않습니다. 다시 입력해주세요.',
      '비밀번호가 같습니다.',
      pwRegex,
      inputPw
    );

  const userNameReg = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9]{2,}$/;
  const [
    inputNickName,
    inputNickNameHandler,
    alertNickName,
    checkNickNameRegex,
  ] = useLoginInput(
    '',
    '닉네임을 입력해주세요',
    '특수문자를 제외한, 2글자 이상의 닉네임을 입력해주세요.',
    '사용 가능한 닉네임 입니다.',
    userNameReg
  );

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [inputEmail, inputEmailHandler, alertEmail, checkEmailRegx] =
    useLoginInput(
      '',
      '이메일을 입력해주세요.',
      '이메일 형식으로 입력해주세요.',
      '사용 가능한 이메일 입니다.',
      emailRegex
    );

  // 회원가입
  const signUpHandler = async (e) => {
    e.preventDefault();
    if (checkIdRegex && checkPwRegex) {
      try {
        await api.post('api/user/signup', {
          username: inputId,
          password: inputPw,
          email: inputEmail,
          nickname: inputNickName,
        });
        alert('회원가입이 완료 되었습니다.');
        moveSigInPg();
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  //스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const moveSigInPg = () => {
    navigate('/login');
  };

  return (
    <LoginModalWrapper>
      <LoginModal height={'730px'}>
        <LoginText>회원가입</LoginText>
        <LoginInputContainer>
          <Input
            text={'아이디'}
            value={inputId}
            onChange={inputIdHandler}
            type={'text'}
            width={'60%'}
          >
            <FaUserAlt />
          </Input>
          <LoginAlertSpan isIdOrPw={checkIdRegex}>{alertId}</LoginAlertSpan>

          <Input
            text={'비밀번호'}
            value={inputPw}
            onChange={inputPwHandler}
            type={'password'}
          >
            <FaLock />
          </Input>
          <LoginAlertSpan isIdOrPw={checkPwRegex}>{alertPw}</LoginAlertSpan>

          <Input
            text={'비밀번호 확인'}
            value={inputCheckPw}
            onChange={checkSame}
            type={'password'}
          >
            <FaLock />
          </Input>
          <LoginAlertSpan isIdOrPw={doubleCheckPwRegex}>
            {alertCheckPw}
          </LoginAlertSpan>

          <Input
            text={'닉네임'}
            value={inputNickName}
            onChange={inputNickNameHandler}
            type={'text'}
          >
            <BsEmojiSunglassesFill />
          </Input>

          <LoginAlertSpan isIdOrPw={checkNickNameRegex}>
            {alertNickName}
          </LoginAlertSpan>

          <Input
            text={'이메일'}
            value={inputEmail}
            onChange={inputEmailHandler}
            type={'email'}
          >
            <BsEnvelopeFill />
          </Input>
          <LoginAlertSpan isIdOrPw={checkEmailRegx}>
            {alertEmail}
          </LoginAlertSpan>

          <Button
            onClick={signUpHandler}
            bg={'#8CB46D'}
            h={'3.125rem'}
            size={'0.9rem'}
          >
            회원가입
          </Button>
        </LoginInputContainer>

        <LoginGoToSignup>
          <span>로그인 페이지로 돌아갈까요? </span>
          <Button
            onClick={moveSigInPg}
            color={'black'}
            size={'0.9rem'}
            w={'auto'}
          >
            돌아가기
          </Button>
        </LoginGoToSignup>
      </LoginModal>
    </LoginModalWrapper>
  );
}

export default SignupPage;
