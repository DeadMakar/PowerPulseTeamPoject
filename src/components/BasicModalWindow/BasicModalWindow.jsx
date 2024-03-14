import Modal from 'react-modal';

import {
  CloseModalBtn,
  ModalBackdrop,
  // ModalWindow,
} from './BasicModalWindow.styled';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
// import { Container } from '../../styles/GlobalStyles';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // backgroundColor: 'orange',
    zIndex: 1200,
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#10100F',
    border: '1px solid rgba(239, 237, 232, 0.2)',
    borderRadius: '12px',
    padding: 0,
  },
};

const BasicModalWindow = ({
  isOpen: modalIsOpen,
  onRequestClose: onModalClose,
  children,
}) => {
  return (
    <ModalBackdrop>
      {/* <Container> */}
      {/* <ModalWindow> */}
      <Modal
        // isOpen={isOpen}
        isOpen={modalIsOpen}
        onRequestClose={onModalClose}
        style={customStyles}
      >
        <CloseModalBtn onClick={onModalClose}>
          <use href={`${sprite}#icon-x`}></use>
        </CloseModalBtn>
        {children}
      </Modal>
      {/* </ModalWindow> */}
      {/* </Container> */}
    </ModalBackdrop>
  );
};

Modal.setAppElement('#root');

export default BasicModalWindow;
