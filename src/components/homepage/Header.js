import React from 'react';
import styled from 'styled-components';
import headshot from 'Assets/images/headshot.jpg';
import { Bio, Contact } from 'Components/components';

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
`;
const StyledHeadline = styled.div`
  letter-spacing: 0.09em;
  font-size: ${p => p.theme.fontSizes.large};
  font-weight: ${p => p.theme.fontWeight.bold};
  padding-bottom: 10px;
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
    <Contact />
  </BioWrapper>
);

export default Header;
