import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function HomeCardItem(props) {
  return (
    <>
      <HomeCardItemWrapper>
        <CardContainer>
          <CardImgLink>{props.children}</CardImgLink>
          <CardDescLink>
            <CardLinkContainer>
              <p>{props.nickName}</p>
              <span>
                {props.introduction && props.introduction !== 'null'
                  ? props.introduction.length > 14
                    ? `${props.introduction.slice(0, 14)}...`
                    : props.introduction
                  : `${props.nickName} 개인 페이지로 이동`}
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
  transition: all 0.2s ease 0s;
  height: 250px;
  width: 90%;
  img {
    width: 100%;
    object-fit: cover;
  }

  transition: 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImgLink = styled(Link)`
  display: flex;
  height: 100%;
`;

const CardContainer = styled.div`
  display: block;
  position: relative;
  height: 100%;
`;

const CardDescLink = styled(Link)`
  display: flex;
  justify-content: space-between;
`;

const CardLinkContainer = styled.div`
  ${(props) => props.theme.FlexCol}
  ${(props) => props.theme.DarkBlur}
  gap: 1rem;
  border-radius: 0;
  bottom: -46px;
  height: 90px;
  padding: 0.5rem 1rem;
  position: absolute;
  transition: all 0.2s ease 0s;
  width: 100%;
  color: white;

  &:hover {
    bottom: 0px;
  }
  span {
    font-size: ${(props) => props.theme.FS.s};
  }
`;
