import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import defaultImg from '../../style/img/example.png';

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
        size={'0.9rem'}
        color={'white'}
      >
        프로필 수정
      </Button>
    </LayoutSidebar>
  );
}

const LayoutSidebar = styled.div`
  ${(props) => props.theme.FlexCol}
  justify-content: flex-start;
  width: 31.25rem;
  height: 46.875rem;
  border: 5px solid #58793e;
  border-radius: 30px;
  margin-right: 30px;
  box-shadow: 9px 9px 0px 1px #58793e;
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 50px;
  border: 5px solid #58793e;
  border-radius: 30px;
`;

const MyUrl = styled.span`
  width: 25rem;
  text-align: center;
  margin-top: 30px;
  font-size: ${(props) => props.theme.FS.m};
`;

const MyDesc = styled.textarea`
  width: 21.875rem;
  height: 13.75rem;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #81a36648;
  border: none;
  border-radius: 30px;
  font-size: ${(props) => props.theme.FS.s};
  resize: none;
  outline: none;
`;
