import React from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import { FaLock } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../elements/Button';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import useJwtDecode from '../../hooks/useJwtDecode';

function EditMyInfoPasswordCheck({ setEdit }) {
  const [inputPw, setInputPw] = useState('');

  const inputPwHandler = (e) => {
    setInputPw(e.target.value);
  };

  const backPage = (e) => {
    setEdit('');
  };

  const username = useJwtDecode();
  const moveEditMyInfo = (e) => {
    console.log(username, inputPw);

    //setEdit('');
  };

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
        <SuccessButtonContainer>
          <Button
            bg={'#58793e'}
            h={'2.8rem'}
            w={'100px'}
            size={'0.9rem'}
            color={'white'}
            onClick={backPage}
          >
            취소
          </Button>
          <Button
            bg={'#58793e'}
            h={'2.8rem'}
            w={'100px'}
            size={'0.9rem'}
            color={'white'}
            onClick={moveEditMyInfo}
          >
            수정
          </Button>
        </SuccessButtonContainer>
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
  background-color: #b1b1b1;
  ${(props) => props.theme.FlexCol};
  width: 400px;
  height: 400px;
  padding: 20px;
  border-radius: 30px;

  > span {
    font-size: ${(props) => props.theme.FS.l};
  }
`;

const SuccessButtonContainer = styled.div`
  ${(props) => props.theme.FlexRow};
`;
