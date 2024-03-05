import styled from 'styled-components';
import { globalColor } from '../../styles/root';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  /* background-color: #04040466; */
  color: grey;
`;

const ModalWindow = styled.div`
  position: absolute;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: grey;
`;

const CloseBtn = styled.svg`
  position: absolute;
  top: 10;
  right: 10;
  width: 14px;
  height: 14px;
  stroke: ${globalColor.colorWhite};
  fill: ${globalColor.colorWhite};
  outline: red;
`;

export { ModalBackdrop, ModalWindow, CloseBtn };
