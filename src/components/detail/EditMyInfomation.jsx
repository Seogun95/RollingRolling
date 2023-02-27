import React from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { BsEmojiSunglassesFill, BsEnvelopeFill } from 'react-icons/bs';
import useLoginInput from '../../hooks/useLoginInput';
import defaultImg from '../../style/img/example.png';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { editMyInfo } from '../../util/api/detailList';
import useSliceToken from '../../hooks/useSliceToken';
import SuccessCheckButton from './SuccessCheckButton';

function EditMyInfomation({ setEdit }) {
  const param = useParams();
  const navigate = useNavigate;
  const [myIntro, setMyIntro] = useState();

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

  // 취소 버튼 클릭시 -> myQuestion 페이지
  const moveMyQuestion = () => {
    navigate(`/home/${param.id}`);
  };

  // 토큰
  const token = useSliceToken();
  // 수정 버튼 클릭시 정보수정 : img는 아직
  const editMyInfoClick = (e) => {
    e.preventDefault();

    if (checkPwRegex && checkNickNameRegex) {
      const newInfo = {
        newPassword: inputPw,
        newPasswordConfirm: inputCheckPw,
        nickname: inputNickName,
        image: '',
        introduction: myIntro,
      };
      editInfo.mutate({ token, newInfo });
      setEdit('');
    }
  };
  // api
  const editInfo = useMutation('editinfo', editMyInfo, {
    onSuccess: (data, variable, context) => {
      console.log('mutation : ', data);
    },
  });

  // 사진은 아직
  const [proImg, setProImg] = useState();

  const uploadProfile = (e) => {
    console.log(e.target.files);
    setProImg(e.target.files);
  };

  return (
    <EditMyInfoContainer>
      <EditInputContainer>
        <Input text={'아이디'} type={'text'} width={'60%'} readOnly>
          <FaUserAlt />
        </Input>

        <Input text={'현재 비밀번호'} type={'password'} readOnly>
          <FaLock />
        </Input>

        <Input
          text={'새 비밀번호'}
          value={inputPw}
          onChange={inputPwHandler}
          type={'password'}
        >
          <FaLock />
        </Input>
        <InputMessageSpan isIdOrPw={checkPwRegex}>{alertPw}</InputMessageSpan>

        <Input
          text={'새 비밀번호 확인'}
          value={inputCheckPw}
          onChange={checkSame}
          type={'password'}
        >
          <FaLock />
        </Input>
        <InputMessageSpan isIdOrPw={doubleCheckPwRegex}>
          {alertCheckPw}
        </InputMessageSpan>

        <Input
          text={'닉네임'}
          value={inputNickName}
          onChange={inputNickNameHandler}
          type={'text'}
        >
          <BsEmojiSunglassesFill />
        </Input>

        <InputMessageSpan isIdOrPw={checkNickNameRegex}>
          {alertNickName}
        </InputMessageSpan>

        <Input text={'이메일'} type={'email'} readOnly>
          <BsEnvelopeFill />
        </Input>

        <SuccessCheckButton
          name1={'취소'}
          name2={'수정'}
          click1={moveMyQuestion}
          click2={editMyInfoClick}
        />
      </EditInputContainer>

      <ProfileContainer>
        <ProfileImgContainer>
          <ImgContainer htmlFor="inputProfile">
            <ProfileImg src={defaultImg} alt=""></ProfileImg>
            <input
              id="inputProfile"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={uploadProfile}
            ></input>
          </ImgContainer>
          <textarea
            value={myIntro}
            onChange={(e) => setMyIntro(e.target.value)}
          ></textarea>
        </ProfileImgContainer>
      </ProfileContainer>
    </EditMyInfoContainer>
  );
}

export default EditMyInfomation;

const EditMyInfoContainer = styled.form`
  ${(props) => props.theme.FlexRow}
  justify-content: space-between;
  background-color: ${(props) => props.theme.CL.brandColorLight};
  height: 100%;
  padding: 1.25rem 3rem;
  border-radius: 30px;
`;

const EditInputContainer = styled.div`
  ${(props) => props.theme.FlexCol}
  align-items: flex-start;
  margin: 1rem 0;
  margin-right: 50px;
`;

const InputMessageSpan = styled.div`
  font-size: 0.8rem;
  padding: 0.4rem 0.5rem 0.5rem;
  height: ${(props) => props.height};
  color: ${(props) => (props.isIdOrPw ? '#58793e' : 'tomato')};
`;

const ProfileContainer = styled.div`
  width: 400px;

  > h1 {
    width: 100%;
    margin-bottom: 30px;
    text-align: left;
  }
`;

const ProfileImgContainer = styled.div`
  ${(props) => props.theme.FlexCol}

  > textarea {
    width: 300px;
    height: 220px;
    margin-top: 30px;
    padding: 1.5rem;
    border: none;
    border-radius: 30px;
    background-color: ${(props) => props.theme.CL.brandColorLight};
    font-size: ${(props) => props.theme.FS.s};
    box-shadow: 3px 3px 0px 1px ${(props) => props.theme.CL.brandColor};
    resize: none;
    outline: none;
  }
`;
const ImgContainer = styled.label`
  position: relative;
`;

const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  border: 5px solid ${(props) => props.theme.CL.brandColor};
  border-radius: 30px;
  margin-bottom: 30px;
  box-shadow: 3px 3px 0px 1px ${(props) => props.theme.CL.brandColor};
  position: relative;

  &:hover {
    cursor: pointer;
    filter: brightness(30%);
  }
`;

const ChangeImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 40%;
  left: 38%;
`;
