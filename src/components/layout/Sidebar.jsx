import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import defaultImg from '../../style/img/example.png';

export default function Sidebar() {
  return (
    <LayoutSidebar>
      <Profile src={defaultImg} alt=""></Profile>
      <MyUrl>www.rolling.com/dajeong</MyUrl>
      <MyDesc placeholder="아직 작성된 소개글이 없습니다." readOnly></MyDesc>

      <Button bg={'#d3d3d3'} w={'350px'} h={'3.125rem'} size={'0.9rem'}>
        프로필 수정
      </Button>
    </LayoutSidebar>
  );
}

const LayoutSidebar = styled.div`
  ${(props) => props.theme.FlexCol}
  justify-content: flex-start;
  background-color: ${(props) => props.theme.CL.brandColor};
  width: 31.25rem;
  height: 46.875rem;
  border-radius: 30px;
  margin-right: 0.625rem;
  box-shadow: 3px 0px 0px 3px ${(props) => props.theme.CL.scroll};
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 50px;
  border-radius: 50%;
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
  border: none;
  border-radius: 30px;
  font-size: ${(props) => props.theme.FS.m};
  resize: none;
  outline: none;
`;
