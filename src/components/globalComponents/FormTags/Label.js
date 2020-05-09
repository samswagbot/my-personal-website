import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  position: absolute;
  pointer-events: none;
  font-size: ${p => p.theme.fontSizes.small};
  color: ${p => p.theme.colors.lightGray};
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`;

const Label = ({ htmlFor, children}) => {
    return (
        <StyledLabel htmlFor={htmlFor}>
            {children}
        </StyledLabel>
    )
   
}

Label.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.string,
}

export default Label;