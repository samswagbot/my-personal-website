import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
    * {
        box-sizing: border-box;
    }
     body {    
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        height: auto;

         @media ${p => p.theme.device.mobileS} {
            border: none;
        }

          @media ${p => p.theme.device.laptop} {
            border: ${p => p.theme.borders.mainBorder};
        }

    }
`;

export default GlobalStyles;
