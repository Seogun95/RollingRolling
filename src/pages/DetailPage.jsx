import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/Sidebar';
import DetailContent from '../components/detail/DetailContent';
import { useParams } from 'react-router-dom';

export default function Detailpage() {
  // 게시판 유저 id 가져오기
  const param = useParams();
  return (
    <DetailWrapper>
      <Sidebar userId={param.id} />
      <DetailContent userId={param.id} />
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  width: 100vw;
  height: 100vh;
`;
