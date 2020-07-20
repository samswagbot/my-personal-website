import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    burgundy: '#AE4037',
    taxiYellow: '#E1AD01',
    lightGray: '#BEBEBE',
    white: '#FFF',
    black: '#000',
  },
  fontSizes: {
    tiny: '12px',
    extraSmall: '14px',
    small: '16px',
    medium: '22px',
    average: '32px',
    large: '35px',
    big: '55px',
    extraLarge: '60px',
  },
  fontWeight: {
    thin: '100',
    bold: '500',
    extraBold: '700',
  },
  fontAlign: {
    center: 'center',
    justify: 'justify',
    left: 'left',
  },
  borders: {
    mainBorder: '10px black solid',
    mainBorderMobile: '7px black solid',
    navItemBottomBorder: '1px #FFF solid',
    formInputBorder: '1px #BEBEBE solid',
    formInputValidBorder: '1px #E1AD01 solid',
    formInputInvalidBorder: '1px #AE4037 solid',
  },
  opacity: {
    mainOpacity: '.7',
  },
  device: {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 425px)`,
    mobileL: `(min-width: 475px)`,
    mobileXL: `(min-width: 575px)`,
    tabletS: `(min-width: 661px)`,
    tablet: `(min-width: 768px)`,
    tabletL: `(min-width: 849px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1150px)`,
    desktop: `(min-width: 1250px)`,
    desktopL: `(min-width: 1400px)`,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propType = {
  children: PropTypes.element,
};

export default Theme;
