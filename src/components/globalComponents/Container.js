import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const StyledWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 50%;
`; 
const Container = ({ children }) => (
  <StyledCtn>
    <StyledWrapper>
      {children}
    </StyledWrapper>
  </StyledCtn>
);

Container.propType = {
  children: PropTypes.any,
};

export default Container;
