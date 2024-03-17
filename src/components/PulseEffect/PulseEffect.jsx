import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    clip: rect(0, 0, 100px, 0);
    opacity: 0.4;
  }
  4% {
    clip: rect(0, 66.66667px, 100px, 0);
    opacity: 0.6;
  }
  15% {
    clip: rect(0, 133.33333px, 100px, 0);
    opacity: 0.8;
  }
  20% {
    clip: rect(0, 300px, 100px, 0);
    opacity: 1;
  }
  80% {
    clip: rect(0, 300px, 100px, 0);
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    clip: rect(0, 300px, 100px, 0);
    opacity: 0;
  }
`;

const PulseContainer = styled.div`
  height: 100px;
  width: 200px;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Pulse = styled.div`
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200px 100px" enable-background="new 0 0 200px 100px" xml:space="preserve"><polyline fill="none" stroke-width="3px" stroke="rgb(255, 68, 51)" points="2.4,58.7 70.8,58.7 76.1,46.2 81.1,58.7 89.9,58.7 93.8,66.5 102.8,22.7 110.6,78.7 115.3,58.7 126.4,58.7 134.4,54.7 142.4,58.7 197.8,58.7 "/></svg>')
    0 0 no-repeat;
  animation: ${pulseAnimation} 2s linear infinite;
`;

export const PulseEffect = () => {
  return (
    <PulseContainer>
      <Pulse />
    </PulseContainer>
  );
};
