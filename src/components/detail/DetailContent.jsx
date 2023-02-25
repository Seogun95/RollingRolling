import React from 'react';
import styled from 'styled-components';
import DetailWriteQuestion from './DetailWriteQuestion';
import DetailMyQuestion from './DetailMyQuestion';

function DetailContent() {
  return (
    <DetailContainer>
      <DetailScrollContainer>
        {/* 
        추후 조건문으로 컴포넌트 걸러줄 예정...?
        ex) 파라미터로 id 받고, 클릭한 페이지 id값 받아서 비교한 후
            같으면 -> DetailMyQuestion component
            다르면 -> DetailWriteQuestion component
       */}
        <DetailWriteQuestion />
        {/* <DetailMyQuestion /> */}
      </DetailScrollContainer>
    </DetailContainer>
  );
}

export default DetailContent;

const DetailContainer = styled.div`
  width: 60vw;
  height: 750px;
  padding: 30px;
  border: 5px solid #58793e;
  border-radius: 30px;
  box-shadow: 9px 9px 0px 1px #58793e;
`;

const DetailScrollContainer = styled.div`
  height: 100%;
  padding-left: 30px;
  // scroll
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: #58793e;
  }
`;