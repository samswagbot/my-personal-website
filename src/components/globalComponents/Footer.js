import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from '../components';

const FooterCtn = styled.footer`
  background-color: ${p => p.theme.colors.black};
`;

const Footer = () => (
        <FooterCtn > 
             <SocialLinks />
        </FooterCtn>
);

export default Footer;
