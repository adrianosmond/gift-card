import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Outer = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
`;

const Inner = styled.div`
  position: absolute;
  width: 17px;
  height: 17px;
  margin: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const LoadingSpinner = () => (
  <Outer>
    <Inner />
    <Inner />
    <Inner />
    <Inner />
  </Outer>
);

export default LoadingSpinner;

/*
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
*/
