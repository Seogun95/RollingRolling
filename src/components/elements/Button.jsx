import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
Button.defaultProps = {
  padding: '.5rem',
  margin: '.2rem',
  borderR: '.5rem',
  border: 'none',
  bg: 'transparent',
  ts: '.2s ease',
  onClick: () => {},
};

const ButtonWrapper = styled.button`
  ${(props) => props.theme.FlexRow};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  font-size: ${(props) => props.size};

  //기본 값
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderR};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bg};
  transition: ${(props) => props.ts};
  color: ${(props) => props.color};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'pointer')};
  ${(props) =>
    props.default &&
    css`
      padding: 1rem;
      font-size: 30px;
      width: 29rem;
      height: 5rem;
      background-color: ${(props) => props.theme.CL.brandColor};
    `}

  ${(props) =>
    props.defaultBorder &&
    css`
      padding: 1rem;
      font-size: 30px;
      width: 29rem;
      height: 5rem;
      border: 2px ${(props) => props.theme.CL.brandColor};
    `}

    ${(props) =>
    props.login &&
    css`
      font-size: 0.9rem;
      height: 3.125rem;
      background: ${(props) => (props.disabled ? '#1d1d1d4e' : '#8CB46D')};
    `}

    ${(props) =>
    props.mypage &&
    css`
      justify-content: flex-start;
      padding: 0;
      margin: 0;
      color: white;
      margin-left: 0.4rem;
    `}


  & {
    cursor: pointer;
  }

  &:active,
  &:hover {
    opacity: 0.9;
  }
`;
