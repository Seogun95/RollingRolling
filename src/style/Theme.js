import styled, { css } from 'styled-components';
import scissors from '../style/img/scissors.png';

export const FlexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FlexRowBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DarkBlur = css`
  background: #161616aa;
  backdrop-filter: blur(3px);
`;
export const CL = {
  brandColor: '#58793e',
  scroll: '#58793e',
  brandColorLight: `#81a36648`,
  brandColorWhite: '#9fcb7c',
};

export const FS = {
  xl: '1.8rem', // header
  l: '1.6rem', // title
  m: '1.3rem', // content, input
  s: '0.9rem', // button
  xs: '0.8rem', // message
};

export const Shadow = {
  all: 'rgb(0 0 0 / 0%) 0 0 0 0, rgb(0 0 0 / 0%) 0 0 0 0, rgb(0 0 0 / 30%) 0 20px 25px -5px, rgb(0 0 0 / 20%) 0 8px 10px -6px',
  bottom:
    'rgb(0 0 0 / 0%) 0 0 0 0, rgb(0 0 0 / 0%) 0 0 0 0, rgb(0 0 0 / 52%) 0 23px 34px -9px, rgb(0 0 0 / 14%) 0 11px 14px 3px',
};
export const CustomHr = styled.hr`
  opacity: 1;
  border: 0;
  clear: both;
  display: block;
  margin: 4rem 0;
  text-align: center;
  width: 100%;
  font-size: inherit;
  background: 0 0;
  border-bottom: 4px dashed #c8c8c8c2;
  height: 0;
  :before {
    content: '';
    background-image: url(${scissors});
    background-size: cover;
    display: block;
    width: 25px;
    height: 25px;
    position: absolute;
    margin-top: -10px;
    left: 64px;
  }
`;
