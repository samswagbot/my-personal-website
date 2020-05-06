import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAnchor = styled.p`
  line-height: 30px;
  font-size: ${p => p.theme.fontSizes.small};
  text-align: ${p => p.theme.fontAlign.justify};
  font-weight: ${p => p.theme.fontWeight.thin};
`;
const Paragraph = ({ children, className }) => (
  <StyledAnchor className={className}>{children}</StyledAnchor>
);

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};

export default Paragraph;
