import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/Sidebar';
import DetailContent from '../components/detail/DetailContent';

export default function Detailpage() {
  return (
    <DetailWrapper>
      <Sidebar />
      <DetailContent />
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  width: 100vw;
  height: 100vh;
`;
