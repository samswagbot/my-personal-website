import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
    colors: {
        burgundy: '#AE4037',
        taxiYellow: '#E1AD01',
        lightGray: '#BEBEBE',
        white: '#FFF',
    },
    fonts: [],
    fontSizes: {
        tiny: '12px',
        extraSmall: '14px',
        small: '16px',
        medium: '22px',
        large: '35px',
        extraLarge: '60px',
    },
    fontWeight: {
        thin: '100',
        bold: '500',
        extraBold: '700'
    },
    fontAlign: {
        center: 'center',
        justify: 'justify',
        left: 'left',
    },
    borders: {
        mainBorder: '10px black solid',
        navItemBottomBorder: '1px #FFF solid',
        formInputBorder: '1px #BEBEBE solid',
        formInputValidBorder: '1px #E1AD01 solid',
        formInputInvalidBorder: '1px #AE4037 solid',
    },
    opacity: {
        mainOpacity: '.7',
    }
  
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

Theme.propType = {
    children: PropTypes.element
}

export default Theme;
