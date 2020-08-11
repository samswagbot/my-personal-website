import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Container, Footer, MobileNavBar } from '../../components';
import Theme from '../../../global/theme/Theme';
import GlobalStyles from '../../../global/theme/GlobalStyles';

const MainContainer = ({ children, className }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const isLaptop = 1024;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Theme>
      <GlobalStyles />
      {width < isLaptop ? <MobileNavBar /> : <NavBar />}
      <Container className={className}>{children}</Container>
      {width < isLaptop && <Footer />}
    </Theme>
  );
};

Container.propType = {
  children: PropTypes.element.isRequired,
};

export default MainContainer;
