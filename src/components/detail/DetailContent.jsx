import React from 'react';
import styled from 'styled-components';
import DetailWriteQuestion from './DetailWriteQuestion';
import DetailMyQuestion from './DetailMyQuestion';

function DetailContent() {
  return (
    <DetailContainer>
      {/* 
        추후 조건문으로 컴포넌트 걸러줄 예정...?
        ex) 파라미터로 id 받고, 클릭한 페이지 id값 받아서 비교한 후
            같으면 -> DetailMyQuestion component
            다르면 -> DetailWriteQuestion component
       */}
      {/* <DetailWriteQuestion /> */}
      <DetailMyQuestion />
    </DetailContainer>
  );
}

export default DetailContent;

const DetailContainer = styled.div`
  background-color: ${(props) => props.theme.CL.brandColor};
  border-radius: 30px;
  width: 60vw;
  height: 46.875rem;
  // 스크롤
  overflow-y: auto;
`;
