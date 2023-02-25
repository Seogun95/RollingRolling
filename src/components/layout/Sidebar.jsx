import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import defaultImg from '../../style/img/example.png';
import { FiEdit3 } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <LayoutSidebar>
      {/* 추후 id값 비교해서 조건문으로 프로필 영역 변경 */}
      <Profile src={defaultImg} alt=""></Profile>
      <MyUrl>www.rolling.com/dajeong</MyUrl>
      <MyDesc placeholder="아직 작성된 소개글이 없습니다." readOnly></MyDesc>

      <Button
        bg={'#597741'}
        w={'350px'}
        h={'3.125rem'}
        size={'1rem'}
        color={'white'}
      >
        <FiEdit3 />
        프로필 수정
      </Button>
      <Ring></Ring>
      <Ring2></Ring2>
      <Ring3></Ring3>
      <Ring4></Ring4>
      <Ring5></Ring5>
      <Ring6></Ring6>
    </LayoutSidebar>
  );
}

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
  padding: 1.25rem;
  border: none;
  border-radius: 30px;
  background-color: ${(props) => props.theme.CL.brandColorLight};
  font-size: ${(props) => props.theme.FS.s};
  resize: none;
  outline: none;
`;

const Ring = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  border: 15px solid ${(props) => props.theme.CL.brandColor};
  border-bottom: none;
  border-radius: 150px 150px 0 0;

  position: absolute;
  top: 10%;
  right: -70px;
  z-index: 999;
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
