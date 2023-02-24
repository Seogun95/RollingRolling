import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Layout/Sidebar';
import Input from '../components/Elements/Input';
import Button from '../components/Elements/Button';
import { useState } from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';
import { LoginInputContainer, LoginAlertSpan } from './LoginPage';
import defaultImg from '../style/img/example.png';

function EditMyPage() {
  const [inputId, setinputId] = useState('');
  const [inputPw, setinputPw] = useState('');
  const [inputCheckPw, setinputCheckPw] = useState('');
  const [inputEmail, setinputEmail] = useState('');
  const [inputNickname, setinputNickname] = useState('');

  const [idMessage, setIdMessage] = useState('아이디를 입력해주세요');
  const [pwMessage, setPwMessage] = useState('비밀번호를 입력해주세요');
  const [checkPwMessage, setCheckPwMessage] =
    useState('비밀번호를 다시 입력해주세요');
  const [emailMessage, setEmailMessage] = useState('이메일을 입력해주세요');
  const [nicknameMessage, setNicknameMessage] =
    useState('닉네임을 입력해주세요');

  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isCheckPw, setIsCheckPw] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  return (
    <EditWrapper>
      <Sidebar />
      <EditContainer>
        <ProfileContainer>
          <h1>Profile</h1>
          <ProfileImgContainer>
            <ProfileImg src={defaultImg} alt=""></ProfileImg>
            <label>www.rolling.com/정다정</label>
            <textarea placeholder="아직 작성된 소개글이 없습니다."></textarea>
          </ProfileImgContainer>
        </ProfileContainer>

        <LoginInputContainer>
          <Input text={'아이디'} type={'text'}>
            <FaUserAlt />
          </Input>

          <Input text={'비밀번호'} value={inputPw} type={'password'}>
            <FaLock />
          </Input>
          <LoginAlertSpan isIdOrPw={isPw}>{pwMessage}</LoginAlertSpan>

          <Input text={'비밀번호 확인'} value={inputCheckPw} type={'password'}>
            <FaLock />
          </Input>
          <LoginAlertSpan isIdOrPw={isCheckPw}>{checkPwMessage}</LoginAlertSpan>

          <Input text={'닉네임'} value={inputNickname} type={'text'}>
            <BsFillEmojiSunglassesFill />
          </Input>

          <LoginAlertSpan isIdOrPw={isNickname}>
            {nicknameMessage}
          </LoginAlertSpan>

          <Input text={'이메일'} value={inputEmail} type={'email'}>
            <FaEnvelope />
          </Input>
          <LoginAlertSpan isIdOrPw={isEmail}>{emailMessage}</LoginAlertSpan>

          <Button bg={'#8CB46D'} h={'3.125rem'} size={'0.9rem'}>
            회원가입
          </Button>
          <button>취소</button>
          <button>수정</button>
        </LoginInputContainer>
      </EditContainer>
    </EditWrapper>
  );
}

export default EditMyPage;

const EditWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  width: 100vw;
  height: 100vh;
`;

const EditContainer = styled.div`
  /* background-color: ${(props) => props.theme.CL.brandColor}; */
  ${(props) => props.theme.FlexRow}
  background-color: #4c4b4b;
  border-radius: 30px;
  width: 60vw;
  min-height: 90vh;
  padding: 50px 150px;
  align-items: flex-start;
`;

const ProfileContainer = styled.div`
  background-color: pink;
  width: 400px;
  margin: 20px;
  margin-right: 50px;
  > h1 {
    width: 100%;
    margin-bottom: 30px;
    text-align: left;
  }
`;

const ProfileImgContainer = styled.div`
  ${(props) => props.theme.FlexCol}

  > label {
    font-size: ${(props) => props.theme.FS.s};
    margin-bottom: 30px;
  }

  > textarea {
    width: 300px;
    height: 200px;
  }
`;

const ProfileImg = styled.img`
  height: 250px;
  border-radius: 50%;
  margin-bottom: 30px;
`;
