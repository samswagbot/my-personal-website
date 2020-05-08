import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  font-size: ${p => p.theme.fontSizes.small};
  border: none;
  border-bottom: ${p => p.theme.borders.formInputBorder};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
    border: none;
    &:valid ~ label {
      top: -20px;
      font-size: 14px;
      color: ${p => p.theme.colors.taxiYellow};
    }
    &:invalid ~ label {
      top: -20px;
      font-size: 14px;
      color: ${p => p.theme.colors.burgundy};
    }
  }
  &:not(:placeholder-shown) ~ label {
    top: -20px;
    font-size: 14px;
    color: ${p => p.theme.colors.taxiYellow};
  }
  &[type="text"] {
    text-transform: capitalize;
  }
  &[type="email"] {
    text-transform: lowercase;
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
  &:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: ${p => p.theme.colors.white} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  @keyframes inputHighlighter {
    from {
      background: ${p => p.theme.colors.taxiYellow};
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

const StyledHighlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const StyledBar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${p => p.theme.colors.taxiYellow};
    transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
`;

const Input = ({
  children,
  className,
  id,
  type,
  placeholder,
  name,
  ariaLabel,
  ariaRequired,
  value,
  pattern,
  title,
  onChange,
}) => (
 <>
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
      onChange={onChange}
    >
      {children}
    </StyledInput>
   <StyledHighlight className="highlight"/>
   <StyledBar className="bar"/>
</>
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
  onChange: PropTypes.func,
};

export default Input;