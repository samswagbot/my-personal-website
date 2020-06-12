import React from 'react';
import styled from 'styled-components';

const StyledModalCtn = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 400px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StyledModalWindow = styled.div`
  background-color: ${p => p.theme.colors.burgundy};
  color: ${p => p.theme.colors.white};
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.span`
  ${p => p.theme.colors.white};
  align-self: flex-end;
  font-size: ${p => p.theme.fontSizes.large};
  font-weight: ${p => p.theme.fontWeight.bold};
  height: 100%;
  left: 31%;
  bottom: 20px;
  position: relative;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
const Modal = () => (
  <StyledModalCtn>
    <StyledModalWindow>
      <div>Thank you so much! Your contact info was submitted!</div>
      <CloseButton>&times;</CloseButton>
    </StyledModalWindow>
  </StyledModalCtn>
);

export default Modal;
