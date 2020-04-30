import React from 'react';
import { NavBar, Container } from 'Components/components'
import Theme from '../global/theme/Theme'
import GlobalStyles from '../global/theme/GlobalStyles'

const Djing = () => (
    <Theme>
        <GlobalStyles />
        <NavBar />
            <Container>
            </Container>
    </Theme>
);

export default Djing;