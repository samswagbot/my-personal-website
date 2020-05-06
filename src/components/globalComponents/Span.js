import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
  font-size: ${p => p.theme.fontSizes.small};
  display: flex;
  align-self: center;
`;

const Span = ({ children, className }) => (
  <StyledSpan className={className}>{children}</StyledSpan>
);

Span.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};

export default Span;
