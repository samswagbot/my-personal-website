import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCodeSandBox = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
`;

const CodeSandBox = ({ src, title }) => (
  <StyledCodeSandBox
    src={src}
    title={title}
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    runonclick={1}
    autoresize={1}
  />
);

CodeSandBox.propType = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default CodeSandBox;
