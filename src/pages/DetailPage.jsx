import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/Sidebar';
import DetailContent from '../components/detail/DetailContent';

export default function Detailpage() {
  return (
    <DetailWrapper>
      <Sidebar />
      <DetailContent />
      <Ring></Ring>
      <Ring2></Ring2>
      <Ring3></Ring3>
      <Ring4></Ring4>
      <Ring5></Ring5>
      <Ring6></Ring6>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Ring = styled.div`
  width: 100px;
  height: 50px;
  /* border: 15px solid #c1d4b1ff; */
  border: 15px solid #58793e;
  border-bottom: none;
  border-radius: 150px 150px 0 0;

  position: absolute;
  top: 200px;
  left: 580px;
  z-index: 999;
`;

const Ring2 = styled(Ring)`
  top: 250px;
`;
const Ring3 = styled(Ring)`
  top: 300px;
`;
const Ring4 = styled(Ring)`
  top: 550px;
`;
const Ring5 = styled(Ring)`
  top: 600px;
`;
const Ring6 = styled(Ring)`
  top: 650px;
`;
