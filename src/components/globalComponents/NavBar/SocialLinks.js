import React from 'react';
import styled from 'styled-components';

import { GithubIcon, LinkedinIcon, CodeSandBoxIcon } from 'Assets/svgs/svgs';

const SocialMediaCtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  padding: 10px;
  flex: 1;

  @media ${p => p.theme.device.mobileS} {
    justify-content: center;
  }
`;
const StyledSocialMediaLink = styled.a`
  padding: 5px;
  border: none;
  display: flex;
  align-self: center;
  &:hover {
    opacity: ${p => p.theme.opacity.mainOpacity};
  }

  @media ${p => p.theme.device.mobileS} {
    padding: 15px;
  }
`;

const SocialLinks = () => {
  const github = 'https://github.com/samswagbot';
  const linkedin = 'https://www.linkedin.com/in/sammossallam/';
  const codeSandBox = 'https://codesandbox.io/u/samswagbot';
  return (
    <SocialMediaCtn>
      <StyledSocialMediaLink href={github} target="_blank">
        <GithubIcon />
      </StyledSocialMediaLink>
      <StyledSocialMediaLink href={linkedin} target="_blank">
        <LinkedinIcon />
      </StyledSocialMediaLink>
      <StyledSocialMediaLink href={codeSandBox} target="_blank">
        <CodeSandBoxIcon padding="0" />
      </StyledSocialMediaLink>
    </SocialMediaCtn>
  );
};

export default SocialLinks;
