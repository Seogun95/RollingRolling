import { css } from 'styled-components';

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
  brandColor: '#8CB46D',
  scroll: '#8FAE76',
};

export const FS = {
  xl: '1.8rem', // header
  l: '1.6rem', // title
  m: '1.3rem', // content, input
  s: '0.9rem', // button
  xs: '0.8rem', // message
};
