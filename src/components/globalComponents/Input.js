import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  height: 40px;
  font-size: ${p => p.theme.fontSizes.small};
  text-indent: 10px;
  color: ${p => p.theme.colors.lightGray};
  border: none;
  border-bottom: ${p => p.theme.borders.formInputBorder};
  padding: 10px 10px 10px 5px;
  display: block;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${p => p.theme.colors.lightGray};
  }
  &:not(:placeholder-shown) {
    border: ${p => p.theme.borders.formInputInvalidBorder};
    border-left: 3px solid ${p => p.theme.colors.burgundy};
  }
  &:valid {
    border: ${p => p.theme.borders.formInputValidBorder};
    border-left: 3px solid ${p => p.theme.colors.taxiYellow};
  }
  &[type="text"] {
    text-transform: capitalize;
  }
  &[type="email"] {
    text-transform: lowercase;
  }
`;

const Input = ({ children, className, id, type, placeholder, name, ariaLabel, ariaRequired, value, pattern, title }) => (
    <StyledInput 
        className={className}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        aria-label={ariaLabel}
        aria-required={ariaRequired}
        value={value} 
        pattern={pattern} 
        title={title} 

    >
            {children}
    </StyledInput>
);

Input.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaRequired: PropTypes.string,
  value: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
};

export default Input;