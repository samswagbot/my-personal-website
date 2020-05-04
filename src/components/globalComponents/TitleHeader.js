import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.h3`
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeight.bold};
    font-size: ${p => p.theme.fontSizes.extraLarge};
    color: ${p => p.theme.colors.lightGray};
    display: flex;
`

const TitleHeader = ({children}) => {
return (
      <StyledHeader>
          {children}
    </StyledHeader>
    )
}

TitleHeader.propTypes = {
    children: PropTypes.string 
}

export default TitleHeader;
