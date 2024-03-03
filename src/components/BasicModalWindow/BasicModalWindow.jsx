import { ModalBackdrop, ModalWindow } from './BasicModalWindow.styled';
import { AddProductForm } from '../AddProductForm';
import { AddExerciseSuccess } from '../AddExerciseSuccess';
import { AddProductSuccess } from '../AddProductSuccess';
import { AddExerciseForm } from '../AddExerciseForm';

const BasicModalWindow = ({ children }) => {
  // прописать функции закрытия окна:
  // 1. клик на бэкдроп,
  // 2. клик на крестик закрытия,
  // 3. клик на кнопку закрытия,
  // 4. нажатие клавиши Esc

  return (
    <ModalBackdrop>
      <ModalWindow>
        <closeBtn />
        {children}
        {/* умова для рендерингу: */}
        {/* <AddProductForm /> */}
        {/* <AddProductSuccess /> */}
        {/* <AddExerciseForm />
        <AddExerciseSuccess /> */}
      </ModalWindow>
    </ModalBackdrop>
  );
};

export default BasicModalWindow;
