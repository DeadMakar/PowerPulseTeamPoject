import styled from 'styled-components';
import { globalColor } from '../../styles/root';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  /* background-color: #10100f; */
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: #10100f;
`;

const CloseModalBtn = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  stroke: ${globalColor.colorWhite};

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }

  &:hover,
  &:focus {
    stroke: ${globalColor.colorOrange};
  }
`;

export { ModalBackdrop, ModalWindow, CloseModalBtn };
