import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { BsEmojiSunglassesFill, BsEnvelopeFill } from 'react-icons/bs';
import useLoginInput from '../../hooks/useLoginInput';
import defaultImg from '../../style/img/example.png';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { editMyInfo, imgUpload } from '../../util/api/detailList';
import SuccessCheckButton from './SuccessCheckButton';
import imageCompression from 'browser-image-compression';
import Cookies from 'js-cookie';
import { loginInfo } from '../../util/api/userInfo';
import { async } from 'q';

function EditMyInfomation({ setEdit }) {
  const param = useParams();
  const navigate = useNavigate;
  const [myIntro, setMyIntro] = useState('아직 등록된 자기소개가 없습니다.');
  const [nickname, setNickname] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  // useEffect(() => {
  //   setIsEdit(true);
  // }, []);

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

  // 취소 버튼 클릭시 -> myQuestion 페이지
  const moveMyQuestion = () => {
    navigate(`/home/${param.id}`);
  };
  // textarea
  const changeIntro = (e) => {
    setMyIntro(e.target.value);
  };
  // nickname
  const changeNickname = (e) => {
    setNickname(e.target.value);
  };

  // 토큰
  const token = Cookies.get('accessJWTToken');

  // 회원정보 불러오기
  const getInfo = useMutation('getInfo', loginInfo, {
    onSuccess: (data) => {
      setMyIntro(data.introduction);
      if (data.nickname !== null) {
        setNickname(data.nickname);
      } else {
        setNickname(data.username);
      }
    },
  });

  console.log('getInfo', getInfo);
  useEffect(() => {
    getInfo.mutate({ token });
  }, [token]);

  /*
    이미지 클릭시 formdata 형식으로 저장..
    수정 버튼 눌렀을때
    api/upload 먼저 보낸 후 response 200 오면
    모든 정보 db 저장 !!
  */

  const [profileImg, setProfileImg] = useState({ proImg: '', viewUrl: '' });
  // img url return값
  const [updateImg, setUpdataImg] = useState(new FormData());

  // 이미지 클릭시 change event
  const uploadProfile = async (e) => {
    const profileImg = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(profileImg, options);

      const formImg = new FormData();
      formImg.append('img', profileImg);
      setUpdataImg(formImg);

      const fileReader = new FileReader();

      fileReader.readAsDataURL(compressedFile);

      fileReader.onload = () => {
        setProfileImg({
          viewUrl: String(fileReader.result),
        });
      };
      setIsEdit(true);
    } catch (error) {
      console.log(error);
    }
  };

  // img api
  const uploadImg = useMutation('uploadImg', imgUpload, {
    onSuccess: (data) => {
      console.log('uploadImg ', data);
      const newInfo = {
        newPassword: inputPw,
        newPasswordConfirm: inputCheckPw,
        nickname: nickname,
        image: data,
        email: getInfo.data.email,
        introduction: myIntro,
      };

      editInfo.mutate({ token, newInfo });
    },
  });

  // 수정 버튼 클릭시 정보수정
  const editMyInfoClick = async (e) => {
    e.preventDefault();
    uploadImg.mutate({ token, img: updateImg });
  };

  // api
  const editInfo = useMutation('editinfo', editMyInfo, {
    onSuccess: (data) => {
      alert('정보가 수정되었습니다.');
      setEdit('');
    },
  });
  console.log(isEdit);
  return (
    <EditMyInfoContainer>
      <EditInputContainer>
        <Input
          disabled
          text={'아이디'}
          type={'text'}
          width={'60%'}
          value={
            getInfo.data && getInfo.data.username !== null
              ? getInfo.data && getInfo.data.username
              : ''
          }
          readOnly
        >
          <FaUserAlt />
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
          disabled
          text={'닉네임'}
          onChange={changeNickname}
          type={'text'}
          value={nickname}
        >
          <BsEmojiSunglassesFill />
        </Input>

        <Input
          disabled
          text={'이메일'}
          type={'email'}
          value={
            getInfo.data && getInfo.data.email !== null
              ? getInfo.data && getInfo.data.email
              : ''
          }
          readOnly
        >
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
            {getInfo.data?.image ? (
              <ProfileImg
                src={isEdit ? profileImg.viewUrl : getInfo.data?.image}
                alt=""
              />
            ) : (
              <ProfileImg src={defaultImg} alt="" />
            )}

            <input
              id="inputProfile"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={uploadProfile}
            ></input>
          </ImgContainer>
          <textarea value={myIntro} onChange={changeIntro}></textarea>
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
  cursor: pointer;
`;

// const ChangeImg = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 40%;
//   left: 38%;
// `;
