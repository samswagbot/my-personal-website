import { NavBar, Header, Container } from 'Components/components'
import Theme from '../global/theme/Theme'
import GlobalStyles from '../global/theme/GlobalStyles'
import React from 'react';

const HomePage = () => (
    <Theme>
        <GlobalStyles />
        <NavBar />
            <Container>
                <Header />
            </Container>
    </Theme>
);

export default HomePage;
