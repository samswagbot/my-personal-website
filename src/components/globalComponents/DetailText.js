import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDetailText = styled.div`
  color: ${p => p.theme.colors.lightGray};
  font-size: ${p => p.theme.fontSizes.extraSmall};
  letter-spacing: 2px;
`;

const DetailText = ({ children, className }) => (
  <StyledDetailText className={className}>{children}</StyledDetailText>
);

DetailText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
};

export default DetailText;
