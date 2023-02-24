import React from 'react';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <div>
      <LayoutSidebar>
        <Profile></Profile>
        <NameBar>이름이 들어가는 곳</NameBar>
      </LayoutSidebar>
    </div>
  );
}

const NameBar = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 10px;
`;

const Profile = styled.div`
  background-color: white;
  width: 16vw;
  height: 21vh;
  margin-top: 20%;
  border-radius: 1rem;
`;

const LayoutSidebar = styled.div`
  background-color: ${(props) => props.theme.CL.brandColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26vw;
  min-height: 90vh;
  border-radius: 30px;
  margin-right: 10px;
  box-shadow: 3px 0px 0px 3px ${(props) => props.theme.CL.scroll};
`;
