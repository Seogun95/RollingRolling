import React from 'react';
import styled from 'styled-components';
import DetailWriteQuestion from './DetailWriteQuestion';
import DetailMyQuestion from './DetailMyQuestion';
import { useParams } from 'react-router-dom';

function DetailContent() {
  return (
    <DetailContainer>
      <DetailScrollContainer>
        {/* 
        추후 조건문으로 컴포넌트 걸러줄 예정...?
        ex) 파라미터로 id\Seogun95\RollingRolling\blob\main\.gitignore 받고, 클릭한 페이지 id값 받아서 비교한 후
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
  height: 46.875rem;
  padding: 1.875rem;
  border: 5px solid ${(props) => props.theme.CL.brandColor};
  border-radius: 30px;
  box-shadow: 9px 9px 0px 1px ${(props) => props.theme.CL.brandColor};
`;

const DetailScrollContainer = styled.div`
  height: 100%;
  padding-left: 1.875rem;
  // scroll
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.CL.brandColor};
  }
`;
