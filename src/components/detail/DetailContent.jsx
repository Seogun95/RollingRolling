import React from 'react';
import styled from 'styled-components';
import DetailWriteQuestion from './DetailWriteQuestion';
import DetailMyQuestion from './DetailMyQuestion';
import EditMyInfomation from './EditMyInfomation';

function DetailContent({ data, choice, setChoice }) {
  console.log('detailContent choice: ', choice);

  return (
    <DetailContainer>
      <DetailScrollContainer>
        {/* 
        추후 조건문으로 컴포넌트 걸러줄 예정...?
        로그인 유저와 게시판 유저 back에서 걸러줌
        값 넘겨줄거 없고 get만 해오면 됨....
       */}

        {/* <DetailWriteQuestion /> */}
        {choice === 'edit' ? (
          <EditMyInfomation setChoice={setChoice} />
        ) : (
          <DetailMyQuestion />
        )}
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
