import {
  CloseModalBtn,
  ModalBackdrop,
  ModalWindow,
} from './BasicModalWindow.styled';
import sprite from '../../assets/sprite.svg';

const BasicModalWindow = ({ children }) => {
  // прописать функции закрытия окна:
  // 1. клик на бэкдроп,
  // 2. клик на крестик закрытия,
  // 3. клик на кнопку закрытия,
  // 4. нажатие клавиши Esc

  return (
    <ModalBackdrop>
      <ModalWindow>
        <CloseModalBtn>
          <use href={`${sprite}#icon-x`}></use>
        </CloseModalBtn>
        {children}
      </ModalWindow>
    </ModalBackdrop>
  );
};

export default BasicModalWindow;
