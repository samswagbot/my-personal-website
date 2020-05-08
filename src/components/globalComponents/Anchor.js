import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${p => p.theme.colors.burgundy};
  transition: opacity 0.5s;
  font-weight: ${p => p.theme.fontWeight.extraBold};
  &:hover {
    border-bottom: ${p => p.theme.borders.navItemBottomBorderActive};
    opacity: ${p => p.theme.opacity.mainOpacity};
  }
  &:visited {
    color: ${p => p.theme.colors.lightGray};
    &:hover {
      border-bottom: ${p => p.theme.borders.navItemBottomBorderVisited};
      opacity: ${p => p.theme.opacity.mainOpacity};
    }
  }
`;
const Anchor = ({ children, href, download, target, className }) => (
  <StyledAnchor
    href={href}
    download={download}
    target={target}
    className={className}
  >
    {children}
  </StyledAnchor>
);

Anchor.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string.isRequired,
  download: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.any,
};

export default Anchor;
