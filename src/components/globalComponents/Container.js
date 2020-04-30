import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`
const Container = ({children}) =>(<StyledCtn>{children}</StyledCtn>)

Container.propType = {
    children: PropTypes.element
}

export default Container;
