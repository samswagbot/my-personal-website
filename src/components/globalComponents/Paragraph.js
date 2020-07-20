import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAnchor = styled.p`
  line-height: 30px;
  font-size: ${p => p.theme.fontSizes.small};
  text-align: ${p => p.theme.fontAlign.justify};
  font-weight: ${p => p.theme.fontWeight.thin};

  @media ${p => p.theme.device.mobileS} {
    margin-top: 5px;
    text-align: ${p => p.theme.fontAlign.left};
  }
  @media ${p => p.theme.device.tablet} {
    text-align: ${p => p.theme.fontAlign.justify};
  }
`;
const Paragraph = ({ children, className }) => (
  <StyledAnchor className={className}>{children}</StyledAnchor>
);

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};

export default Paragraph;
