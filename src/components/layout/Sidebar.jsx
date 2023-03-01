import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import defaultImg from '../../style/img/example.png';
import { FiEdit3 } from 'react-icons/fi';
import { FcLikePlaceholder } from 'react-icons/fc';

export default function Sidebar({ data, setEdit }) {
  const editMyProfileClick = () => {
    setEdit('pwCheck');
  };

  return (
    <LayoutSidebar>
      <AdminNickNameBubble>
        <div>{data.user.nickname}</div>
      </AdminNickNameBubble>
      <Profile
        src={data.user.image ? data.user.image : defaultImg}
        alt=""
      ></Profile>
      <div>
        <MyUrl>
          www.rolling.com/{data.user.username}
          <FcLikePlaceholder />
        </MyUrl>
      </div>
      <MyDesc
        value={
          data.user.introduction !== null
            ? data.user.introduction
            : '아직 작성된 소개글이 없습니다.'
        }
        readOnly
      ></MyDesc>
      {data.myPost && (
        <Button
          bg={'#597741'}
          w={'350px'}
          h={'3.125rem'}
          size={'1rem'}
          color={'white'}
          onClick={editMyProfileClick}
        >
          <FiEdit3 />
          프로필 수정
        </Button>
      )}

      <Ring></Ring>
      <Ring2></Ring2>
      <Ring3></Ring3>
      <Ring4></Ring4>
      <Ring5></Ring5>
      <Ring6></Ring6>
    </LayoutSidebar>
  );
}

const AdminNickNameBubble = styled.div`
  position: absolute;
  min-width: 20px;
  top: -20px;
  background: ${(props) => props.theme.CL.brandColor};
  color: white;
  border-radius: 0.625rem;
  padding: 0.45rem 1rem;
  filter: drop-shadow(2px 3px 1px black);
  animation: upAndDown 2s infinite;
  &:after {
    content: '';
    border-top: 10px solid ${(props) => props.theme.CL.brandColor};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    ${(props) => props.theme.FlexCol}
    font-size: 1.5rem;
  }

  @keyframes upAndDown {
    0%,
    100% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(0px);
    }
  }
`;
const LayoutSidebar = styled.div`
  ${(props) => props.theme.FlexCol}
  justify-content: flex-start;
  width: 31.25rem;
  height: 46.875rem;
  margin-right: 1.875rem;
  border: 5px solid ${(props) => props.theme.CL.brandColor};
  border-radius: 30px;
  box-shadow: 9px 9px 0px 1px ${(props) => props.theme.CL.brandColor};
  position: relative;
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 50px;
  border: 5px solid ${(props) => props.theme.CL.brandColor};
  border-radius: 30px;
`;

const MyUrl = styled.span`
  width: 25rem;
  margin-top: 1.875rem;
  font-size: ${(props) => props.theme.FS.m};
  text-align: center;
`;

const MyDesc = styled.textarea`
  width: 21.875rem;
  height: 13.75rem;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  padding: 1.5rem;
  border: none;
  border-radius: 30px;
  background-color: ${(props) => props.theme.CL.brandColorLight};
  font-size: ${(props) => props.theme.FS.s};
  box-shadow: 3px 3px 0px 1px ${(props) => props.theme.CL.brandColor};
  resize: none;
  outline: none;
`;

const Ring = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  border: 13px solid ${(props) => props.theme.CL.brandColor};
  border-bottom: none;
  border-radius: 150px 150px 0 0;

  position: absolute;
  top: 10%;
  right: -70px;
  z-index: 999;

  &::after {
    display: block;
    background-color: ${(props) => props.theme.CL.brandColor};
    width: 25px;
    height: 25px;
    content: '';
    border-radius: 50%;

    position: absolute;
    top: 43%;
    right: -20px;
  }
  &::before {
    display: block;
    background-color: ${(props) => props.theme.CL.brandColor};
    width: 25px;
    height: 25px;
    content: '';
    border-radius: 50%;

    position: absolute;
    top: 43%;
    left: -20px;
  }
`;

const Ring2 = styled(Ring)`
  top: 17%;
`;
const Ring3 = styled(Ring)`
  top: 24%;
`;
const Ring4 = styled(Ring)`
  top: 68%;
`;
const Ring5 = styled(Ring)`
  top: 75%;
`;
const Ring6 = styled(Ring)`
  top: 82%;
`;
