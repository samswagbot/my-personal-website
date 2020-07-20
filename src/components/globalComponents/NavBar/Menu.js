import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { HomeIcon } from 'Assets/svgs/svgs';
import { Link } from 'react-router-dom';

const StyledNavItem = styled.li`
  font-size: ${p => p.theme.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding: 5px;
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

const StyledMenu = styled.ul`
  font-size: ${p => p.theme.fontSizes.small};
  background-color: ${p => p.theme.colors.taxiYellow};
  margin-top: 0;
  padding: 15px;
  opacity: 0.9;
`;

const StyledMenuCtn = styled.div`
  position: sticky;
  overflow: auto;
  top: 58px;
`;

const Menu = ({ open }) => {
  const navbarLinks = {
    home: '/',
    experience: '/experience',
    code: '/code',
    'talks & campaigns': '/talksandcampaigns',
  };

  return (
    <StyledMenuCtn>
      {open && (
        <StyledMenu>
          {Object.entries(navbarLinks).map(title => (
            <StyledNavItem key={title}>
              <Link to={title[1]}>
                {title[0] === 'home' ? <HomeIcon /> : title[0]}
              </Link>
            </StyledNavItem>
          ))}
        </StyledMenu>
      )}
    </StyledMenuCtn>
  );
};

Menu.propTypes = {
  open: PropTypes.bool,
};

export default Menu;
