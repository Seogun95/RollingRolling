import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function HomeCardItem(props) {
  return (
    <>
      <HomeCardItemWrapper>
        <CardContainer to={`/home/${props.userid}`}>
          <CardImgLink>{props.children}</CardImgLink>
          <CardDescLink>
            <CardLinkContainer>
              <CardLinkNickName>
                <p>{props.nickname}</p>
              </CardLinkNickName>
              <span>
                {props.introduction && props.introduction !== 'null'
                  ? props.introduction.length > 14
                    ? `${props.introduction.slice(0, 14)}...`
                    : props.introduction
                  : `${props.nickname}에게 롤링페이퍼 쓰러가기`}
              </span>
            </CardLinkContainer>
          </CardDescLink>
        </CardContainer>
      </HomeCardItemWrapper>
    </>
  );
}

const HomeCardItemWrapper = styled.article`
  border: 1px solid 0;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease;
  height: 250px;
  width: 90%;
  box-shadow: ${(props) => props.theme.Shadow.all};
  img {
    width: 100%;
    object-fit: cover;
  }

  transition: 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.Shadow.bottom};
  }
`;

const CardImgLink = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  z-index: 1;
`;

const CardContainer = styled(Link)`
  display: block;
  position: relative;
  height: 100%;
`;

const CardDescLink = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardLinkContainer = styled.div`
  ${(props) => props.theme.FlexCol}
  ${(props) => props.theme.DarkBlur}
  font-size: ${(props) => props.theme.FS.m};
  gap: 1rem;
  border-radius: 0;
  bottom: -15%;
  height: 80px;
  padding: 0.5rem 1rem;
  position: absolute;
  transition: all 0.2s ease 0s;
  width: 100%;
  z-index: 2;
  color: white;

  &:hover {
    bottom: 0px;
  }
  span {
    font-size: ${(props) => props.theme.FS.s};
  }
`;

const CardLinkNickName = styled.div`
  height: 25px;
`;
