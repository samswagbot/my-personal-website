import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Menu, CloseMenu } from 'Assets/svgs/svgs';

const StyledMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const StyledMenuWrapper = styled.nav`
  display: flex;
  background-color: ${p => p.theme.colors.burgundy};
  position: sticky;
  overflow: auto;
  top: 0;
  opacity: 0.9;
  padding: 15px;
`;

const MenuWrapper = ({ open, setOpen }) => (
  <StyledMenuWrapper>
    <StyledMenuButton onClick={() => setOpen(!open)}>
      {open ? <CloseMenu /> : <Menu />}
    </StyledMenuButton>
  </StyledMenuWrapper>
);

MenuWrapper.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default MenuWrapper;
