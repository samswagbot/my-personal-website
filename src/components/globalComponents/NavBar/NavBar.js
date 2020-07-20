import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HomeIcon } from 'Assets/svgs/svgs';
import { SocialLinks } from '../../components';

const StyledNavWrapper = styled.nav`
  display: flex;
  background-color: ${p => p.theme.colors.burgundy};
  position: sticky;
  overflow: auto;
  top: 0;
  margin-bottom: 50px;
  opacity: 0.9;

  @media ${p => p.theme.device.mobileS} {
    margin-bottom: 30px;
  }
`;
const StyledLinkCtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledNavBar = styled.ul`
  display: flex;
  list-style-type: none;
  width: 75%;
  justify-content: space-evenly;
  padding: 0;
  margin-left: 147px;
`;

const StyledNavItem = styled.li`
  font-size: ${p => p.theme.fontSizes.small};
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${p => p.theme.colors.white};
    transition: opacity 0.5s, border-bottom 0.2s;
    &:hover,
    &:visited,
    &:visited:hover {
      border-bottom: 1px solid white;
      opacity: ${p => p.theme.opacity.mainOpacity};
    }
  }
`;

const NavBar = () => {
  const navbarLinks = {
    home: '/',
    experience: '/experience',
    code: '/code',
    'talks & campaigns': '/talksandcampaigns',
  };

  const renderNavTitles = () =>
    Object.entries(navbarLinks).map(title => (
      <StyledNavItem key={title}>
        <Link to={title[1]}>
          {title[0] === 'home' ? <HomeIcon /> : title[0]}
        </Link>
      </StyledNavItem>
    ));

  return (
    <StyledNavWrapper>
      <StyledLinkCtn>
        <StyledNavBar>{renderNavTitles()}</StyledNavBar>
      </StyledLinkCtn>
      <SocialLinks />
    </StyledNavWrapper>
  );
};

export default NavBar;
