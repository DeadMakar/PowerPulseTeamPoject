import {
  CloseModalBtn,
  ModalBackdrop,
  ModalWindow,
} from './BasicModalWindow.styled';
import sprite from '../../assets/sprite.svg';
import { Container } from '../../styles/GlobalStyles';

const BasicModalWindow = ({ children }) => {
  // прописать функции закрытия окна:
  // 1. клик на бэкдроп,
  // 2. клик на крестик закрытия,
  // 3. клик на кнопку закрытия,
  // 4. нажатие клавиши Esc

  return (
    <ModalBackdrop>
      {/* <Container> */}
      <ModalWindow>
        <CloseModalBtn>
          <use href={`${sprite}#icon-x`}></use>
        </CloseModalBtn>
        {children}
      </ModalWindow>
      {/* </Container> */}
    </ModalBackdrop>
  );
};

export default BasicModalWindow;
