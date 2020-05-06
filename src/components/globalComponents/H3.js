import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH3 = styled.h3`
  display: flex;
  color: ${p => p.theme.colors.taxiYellow};
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.medium};
  margin-bottom: 0;
`;

const H3 = ({ children, className }) => (
  <StyledH3 className={className}>{children}</StyledH3>
);

H3.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};

export default H3;
