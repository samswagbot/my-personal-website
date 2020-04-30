import React from 'react';
import { NavBar, Container } from '../../components/components'
import Theme from '../../global/theme/Theme'
import GlobalStyles from '../../global/theme/GlobalStyles'
import PropTypes from 'prop-types';

const MainContainer = ({children}) => (
    <Theme>
        <GlobalStyles />
        <NavBar />
            <Container>
                {children}
            </Container>
    </Theme>
);

Container.propType = {
    children: PropTypes.element
}

export default MainContainer;
