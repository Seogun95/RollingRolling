import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/layout/Sidebar';
import DetailContent from '../components/detail/DetailContent';
import { useParams } from 'react-router';
import { getPostList } from '../util/api/detailList';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function Detailpage() {
  const [choice, setChoice] = useState();
  // console.log('detailpage : ', choice);

  const param = useParams();
  const getToken = Cookies.get('accessJWTToken');
  const token = getToken.split(' ')[1];

  const { isLoading, isError, data } = useQuery('getPost', () =>
    getPostList({ id: param.id, token })
  );

  console.log('data', data); // 데이터 확인

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
  width: 95%;
  max-width: 100vw;
  margin: 0 auto;
  height: calc(100vh - 4rem);
`;
