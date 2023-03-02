import React from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import { FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { passwordCheck } from '../../util/api/detailList';
import SuccessCheckButton from './SuccessCheckButton';
import Cookies from 'js-cookie';

function EditMyInfoPasswordCheck({ setEdit }) {
  const [inputPw, setInputPw] = useState('');

  const inputPwHandler = (e) => {
    setInputPw(e.target.value);
  };

  // 뒤로가기
  const backPage = () => {
    setEdit('');
  };

  // 토큰
  const token = Cookies.get('accessJWTToken');
  // info수정 페이지 이동
  const moveEditMyInfo = (e) => {
    e.preventDefault();

    pwCheck.mutate({ password: inputPw, token });
  };
  // api
  const pwCheck = useMutation('passwordCheck', passwordCheck, {
    onSuccess: (data) => {
      if (!data) {
        alert('비밀번호가 틀렸습니다. 다시 입력해주세요');
        setInputPw('');
      } else {
        setEdit('edit');
      }
    },
  });

  return (
    <EditContainer>
      <PasswordContainer>
        <span>비밀번호 입력해주세요</span>
        <Input
          text={'비밀번호'}
          value={inputPw}
          onChange={inputPwHandler}
          type={'password'}
        >
          <FaLock />
        </Input>
        <SuccessCheckButton
          name1={'취소'}
          name2={'확인'}
          click1={backPage}
          click2={moveEditMyInfo}
        />
      </PasswordContainer>
    </EditContainer>
  );
}

export default EditMyInfoPasswordCheck;

const EditContainer = styled.div`
  ${(props) => props.theme.FlexCol};
  background-color: ${(props) => props.theme.CL.brandColorLight};
  border-radius: 30px;
  height: 100%;
`;

const PasswordContainer = styled.div`
  background: #ffffff76;
  ${(props) => props.theme.FlexCol};
  width: 400px;
  height: 400px;
  padding: 20px;
  border-radius: 30px;

  > span {
    font-size: ${(props) => props.theme.FS.l};
  }
`;
