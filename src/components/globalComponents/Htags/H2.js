import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.large};
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.lightGray};
  letter-spacing: 2px;
  width: 100%;
`;

const H2 = ({ children, className }) => (
  <StyledH2 className={className}>{children}</StyledH2>
);

H2.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};

export default H2;
