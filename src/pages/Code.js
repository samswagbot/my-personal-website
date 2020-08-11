import React from "react";
import styled from "styled-components";
import { MainContainer, CodeContainer } from "Components/components";

const StyledMainCtn = styled(MainContainer)`
  @media screen and (min-width: 768px) {
    &:first-child {
      width: 90%;
    }
  }
`;

const Code = () => (
  <StyledMainCtn>
    <CodeContainer />
  </StyledMainCtn>
);
export default Code;
