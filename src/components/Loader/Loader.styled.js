import styled, { keyframes } from 'styled-components';

export const StyledLetter = styled.span`
  background-color: green;
  color: green;
  position: relative;
  top: 0.63em;
  display: inline-block;
  text-transform: uppercase;
  opacity: 0;
  transform: rotateX(-90deg);

  &:nth-child(1) {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.2s;
  }

  &:nth-child(2) {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.3s;
  }

  &:nth-child(3) {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.4s;
  }

  &:nth-child(4) {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.5s;
  }

  &:nth-child(5) {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.6s;
  }

  &:nth-child(6) {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.7s;
  }

  &:nth-child(7) {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.8s;
  }
`;
export const StyledH1 = styled.h1`
  color: green;
  margin: 0;
  padding: 0;
  font-family: 'Arial Narrow', sans-serif;
  font-weight: 100;
  font-size: 1.1em;
  color: #a3e1f0;
`;
export const keyframesDrop = keyframes`
  10% {
      opacity: 0.5;
  }
  20% {
      opacity: 1;
      top: 3.78em;
      transform: rotateX(-360deg);
  }
  80% {
      opacity: 1;
      top: 3.78em;
      transform: rotateX(-360deg);
  }
  90% {
      opacity: 0.5;
  }
  100% {
      opacity: 0;
      top: 6.94em;
  }`;
export const StyledDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #191a1a;
  text-align: center;
`;
export const StyledDropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
