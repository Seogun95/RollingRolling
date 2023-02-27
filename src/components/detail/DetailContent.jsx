import React from 'react';
import styled from 'styled-components';
import DetailWriteQuestion from './DetailWriteQuestion';
import DetailMyQuestion from './DetailMyQuestion';
import EditMyInfomation from './EditMyInfomation';
import EditMyInfoPasswordCheck from './EditMyInfoPasswordCheck';

function DetailContent({ data, edit, setEdit }) {
  // data.myPost : 게시판 유저와 로그인 유저가 같으면 true / 다르면 false

  return (
    <DetailContainer>
      <DetailScrollContainer>
        {!data.myPost ? (
          <DetailWriteQuestion />
        ) : edit === 'pwCheck' ? (
          <EditMyInfoPasswordCheck setEdit={setEdit} />
        ) : edit === 'edit' ? (
          <EditMyInfomation setEdit={setEdit} />
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
  justify-content: center;
  height: 100%;
  padding-left: 1.875rem;
  // scroll
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.CL.brandColor};
  }
`;
