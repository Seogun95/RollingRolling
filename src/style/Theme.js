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
};

export const FS = {
  xl: '1.8rem', // header
  l: '1.6rem', // title
  m: '1.3rem', // content, input
  s: '0.9rem', // button
  xs: '0.8rem', // message
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
  border-bottom: 4px dashed #eeeeee82;
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
  }
`;
