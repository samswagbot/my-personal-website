import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media ${p => p.theme.device.tablet} {
    margin-top: 21px;
  }
`;

const StyledWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media ${p => p.theme.device.mobileS} {
    width: 90%;
  }

  @media ${p => p.theme.device.tablet} {
    width: 80%;
  }

  @media ${p => p.theme.device.laptop} {
    width: 60%;
  }
`;
const Container = ({ children }) => (
  <StyledCtn>
    <StyledWrapper>{children}</StyledWrapper>
  </StyledCtn>
);

Container.propType = {
  children: PropTypes.element.isRequired,
};

export default Container;
