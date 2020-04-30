import React from 'react';
import { NavBar, Container, Resume } from 'Components/components'
import Theme from '../global/theme/Theme'
import GlobalStyles from '../global/theme/GlobalStyles'

const Experience = () => (
    <Theme>
        <GlobalStyles />
        <NavBar />
            <Container>
                <Resume />
            </Container>
    </Theme>
);

export default Experience;