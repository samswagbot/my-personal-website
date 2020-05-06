import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH4 = styled.h4`
  color: ${p => p.theme.colors.taxiYellow};
  text-align: ${p => p.theme.fontAlign.right};
  display: flex;
  align-self: flex-start;
  margin: 0;
`;

const H4 = ({ children, className }) => (
  <StyledH4 className={className}>{children}</StyledH4>
);

H4.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};

export default H4;
