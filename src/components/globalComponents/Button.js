import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 15px;
  letter-spacing: 2px;
  background-color: ${p => p.theme.colors.taxiYellow};
  color: ${p => p.theme.colors.white};
  width: 100%;
  font-size: ${p => p.theme.fontSizes.small};
  margin-bottom: 30px;
  border-radius: 5px;
  border: none;
  font-weight: ${p => p.theme.fontWeight.bold};
  transition: opacity 0.5s;
  &:hover {
    opacity: ${p => p.theme.opacity.mainOpacity};
  }
  &:focus {
    outline: 0;
  }
`;
const Button = ({ children, type, value }) => (
    <StyledButton
        type={type}
        value={value}
    >
        {children}
    </StyledButton>
);

Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    value: PropTypes.string,
};

export default Button;