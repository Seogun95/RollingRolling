import React from 'react';
import styled from 'styled-components';
// import Footer from '../common/Footer';
import Header from './Header';

const MainWrapper = styled.div`
  width: calc(100%);
  height: calc(100vh - 64px);
  margin-top: 64px;
`;

const BodyWrapper = styled.div`
  height: 100%;
`;

function Layout({ children }) {
  return (
    <BodyWrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      {/* <Footer /> */}
    </BodyWrapper>
  );
}

export default Layout;
