import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/Sidebar';
import DetailContent from '../components/detail/DetailContent';
import { useParams } from 'react-router';
import { getPostList } from '../util/api/detailList';
import { useQuery } from 'react-query';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

export default function Detailpage() {
  const [choice, setChoice] = useState();
  console.log('detailpage : ', choice);

  const param = useParams();
  const [cookies] = useCookies();
  const token = cookies.accessJWTToken.split(' ')[1];

  const { isLoading, isError, data } = useQuery('getPost', () =>
    getPostList({ id: param.id, token })
  );
  // console.log('data', data); // 데이터 확인

  if (isLoading) {
    return <div>로딩중!!...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <DetailWrapper>
      <Sidebar data={data.user} setChoice={setChoice} />
      <DetailContent data={data} choice={choice} setChoice={setChoice} />
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  width: 100vw;
  height: 100vh;
`;
