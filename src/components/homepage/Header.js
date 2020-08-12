import React from 'react';
import styled from 'styled-components';
import headshot from 'Assets/images/headshot.jpg';
import { Bio, Contact } from 'Components/components';
import ContactOne from '../homepage/ContactOne'
import ContactForm from '../homepage/ContactOne';

const BioWrapper = styled.div`
  text-align: ${p => p.theme.fontAlign.center};
`;
const StyledHeader = styled.div`
  font-size: ${p => p.theme.fontSizes.extraLarge};
  font-weight: ${p => p.theme.fontWeight.extraBold};
  color: ${p => p.theme.colors.burgundy};
  text-align: ${p => p.theme.fontAlign.center};
  opacity: ${p => p.theme.opacity.mainOpacity};
  height: 78px;

  @media ${p => p.theme.device.mobileS} {
    font-size: ${p => p.theme.fontSizes.large};
    height: 45px;
  }

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.big};
    height: 63px;
  }
`;
const StyledHeadline = styled.div`
  letter-spacing: 0.09em;
  font-size: ${p => p.theme.fontSizes.large};
  font-weight: ${p => p.theme.fontWeight.bold};
  padding-bottom: 10px;

  @media ${p => p.theme.device.mobileS} {
    font-size: ${p => p.theme.fontSizes.small};
  }

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.average};
  }
`;
const StyledHeadShot = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Header = () => (
  <BioWrapper>
    <StyledHeader>Hi, I'm Sam.</StyledHeader>
    <StyledHeadline>I design & build user interfaces.</StyledHeadline>
    <StyledHeadShot src={headshot} alt="headshot" />
    <Bio />
    <ContactForm />
    {/* <Contact /> */}
  </BioWrapper>
);

export default Header;
