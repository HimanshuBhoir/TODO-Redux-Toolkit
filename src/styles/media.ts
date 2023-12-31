import { css } from 'styled-components';

const deviceSize:any = {
  mobile: '420px',
  tablet: '768px',
  laptop: '1025px',
};

export const MEDIA_QUERIES = {
  MOBILE: `screen and (max-width: ${deviceSize.mobile})`,
  TABLET: `screen and (max-width: ${deviceSize.tablet})`,
  LAPTOP: `screen and (max-width: ${deviceSize.laptop})`,
};

const media = Object.keys(deviceSize).reduce((acc:any, label) => {
  acc[label] = (...args:any) => css`
    @media screen and (max-width: ${deviceSize[label]}) {
      ${css(args)};
    }
  `;
  return acc;
}, {});

export default media;
