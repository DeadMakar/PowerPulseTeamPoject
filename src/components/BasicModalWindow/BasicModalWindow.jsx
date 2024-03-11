import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import {
  CloseModalBtn,
  ModalBackdrop,
  // ModalWindow,
} from './BasicModalWindow.styled';
import sprite from '../../assets/sprite.svg';
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
  },
};

const BasicModalWindow = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ModalBackdrop>
      <button onClick={openModal}>Open Modal</button>
      {/* <Container> */}
      {/* <ModalWindow> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CloseModalBtn onClick={closeModal}>
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
