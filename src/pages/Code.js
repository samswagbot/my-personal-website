import React from 'react';
import styled from 'styled-components';
import { MainContainer, Container, CodeContainer } from 'Components/components';

const StyledMainCtn = styled(Container)`
  @media ${p => p.theme.device.tablet} {
    div {
      width: 90%;
    }
  }
`;
const Code = () => (
  <MainContainer>
    <StyledMainCtn>
      <CodeContainer />
    </StyledMainCtn>
  </MainContainer>
);
export default Code;
