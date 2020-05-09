import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Container } from '../components';
import Theme from '../../global/theme/Theme';
import GlobalStyles from '../../global/theme/GlobalStyles';

const MainContainer = ({ children }) => (
  <Theme>
    <GlobalStyles />
    <NavBar />
    <Container>{children}</Container>
  </Theme>
);

Container.propType = {
  children: PropTypes.any.isRequired,
};

export default MainContainer;
