import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledAnchor = styled.a`       
    cursor: pointer;
    text-decoration: none;
    color: ${p => p.theme.colors.burgundy};
    transition: opacity .5s, border-bottom .5s;
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
`
const Paragraph = ({ children }) => {
    return (
        <StyledAnchor>
            {children}
        </StyledAnchor>
    )
}

Paragraph.propTypes = {
    children: PropTypes.element,
}

export default Paragraph;
