import styled from 'styled-components';
import { globalColor } from '../../styles/root';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  /* background-color: #04040466; */
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 374px) {
    /* margin: 0 auto; */
    /* width: 100; */
    min-width: 300px;
    min-height: 362px;
  }

  @media screen and (min-width: 375px) {
    min-width: 335px;
    min-height: 362px;
  }

  @media screen and (min-width: 768px) {
    min-width: 430px;
    min-height: 428px;
  }
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
