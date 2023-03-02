import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import defaultImg from '../../style/img/example.png';
import { FiEdit3 } from 'react-icons/fi';
import { ReactComponent as Heart } from '../../style/img/heart.svg';
import { ReactComponent as HeartFill } from '../../style/img/heartFill.svg';
import { useMutation } from 'react-query';
import { likeUser } from '../../util/api/detailList';
import { useState } from 'react';
import { useParams } from 'react-router';
import Cookies from 'js-cookie';
import { useQueryClient } from 'react-query';

export default function Sidebar({ data, setEdit }) {
  const param = useParams();

  const editMyProfileClick = () => {
    setEdit('pwCheck');
  };

  const [isLike, setIsLike] = useState(data.user.liked);
  const [isLikeCnt, setIsLikeCnt] = useState(0);

  const token = Cookies.get('accessJWTToken');

  const queryClient = useQueryClient();
  const likeCheck = useMutation(likeUser, {
    onSuccess: (data) => {
      setIsLikeCnt(data.likeCount);
      queryClient.invalidateQueries('getPost');
    },
  });

  const likeClickHandler = () => {
    setIsLike(!isLike);
    likeCheck.mutate({ id: param.id, token, liked: isLike });
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
      <MyUrlContainer>
        <MyUrl>www.rolling.com/{data.user.username}</MyUrl>
        <LikeBtn isLike={isLike} onClick={likeClickHandler}>
          {data.user.liked ? <Heart /> : <HeartFill />} <span>{isLikeCnt}</span>
        </LikeBtn>
      </MyUrlContainer>
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

export const LikeBtn = styled.div`
  ${(props) => props.theme.FlexRow};
  padding: 0.2rem 0.4rem;
  background: ${(props) => (props.isLike ? '#eeee' : '#ffdcdc')};
  border-radius: 1rem;
  gap: 0.25rem;
  cursor: pointer;
  span {
    font-size: ${(props) => props.theme.FS.s};
    margin-top: 1px;
  }
  svg {
    width: 15px;
  }
`;

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
  object-fit: cover;
`;

const MyUrlContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MyUrl = styled.span`
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
