import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  FieldWrapper,
  SpanStyled,
  TextStyled,
  BtnWrapper,
  BtnOrange,
  BtnCancel,
  GramTxt,
  FieldGramsWrapper,
  FieldProduct,
  FieldGrams,
} from './AddProductForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryError } from '../../redux/diary/selectors';
import { useState } from 'react';
import { default as changeDate } from '../../helpers/changeDate';
import { toast } from 'react-toastify';
import { addDiaryProducts } from '../../redux/diary/operations';

const productValidation = Yup.object().shape({
  mass: Yup.number().required('Required'),
});

export const AddProductForm = ({
  productTitle,
  calories,
  productId,
  onClick: openModal,
  closeModallAddProductForm: closeModal,
}) => {
  const dispatch = useDispatch();

  const errorAdding = useSelector(selectDiaryError);

  const [productToAdd, setProductToAdd] = useState({
    product: '',
    date: '',
    amount: '',
    calories: '',
  });

  const [caloriesСonsumed, setСaloriesСonsumed] = useState('');
  // const [consumedCalories, setConsumedCalories] = useState(0);

  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const currentDate = new Date();

  const date = changeDate(currentDate);
  const parts = date.split('/');
  const formattedCurrentDate = `${parts[0]}-${parts[1]}-${parts[2]}`;

  const formattedTitle =
    productTitle[0].toUpperCase() + productTitle.slice(1).toLowerCase();

  const applyAddProduct = async () => {
    // e.preventDefault();
    // if (
    //   (0 >= productToAdd.amount || 3000 <= productToAdd.amount) &&
    //   productToAdd.amount
    // ) {
    //   setError('Entering value must be at range 1g to 3000g');
    //   setIsError(true);
    //   setСaloriesСonsumed(calories);
    // } else if (
    //   Object.keys(productToAdd).length < 0 ||
    //   productToAdd.amount === ''
    // ) {
    //   setError('Enter amount*');
    //   setIsError(true);
    // } else if (!errorAdding) {
    //   setError('');
    //   setIsError(false);
    try {
      closeModal();
      openModal(productToAdd.calories);
      dispatch(addDiaryProducts(productToAdd));
      // console.log(productToAdd);
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
    // } else {
    //   toast.error('Sorry, something went wrong, please try again', {
    //     theme: 'dark',
    //   });
    //   return;
  };
  // };

  const handleInputChange = (e) => {
    const gramsEat = parseFloat(e.target.value);
    const caloriesPer100g = parseFloat(calories);

    // const inputProductWeight = (event) => {
    //   const currentWeight = event.target.value;
    //   const consumedCalories = (currentWeight / weight) * baseCalories;
    //   setConsumedCalories(Math.round(consumedCalories));
    // };

    if (!isNaN(gramsEat) && !isNaN(caloriesPer100g)) {
      const currentCalories = Math.round((gramsEat * caloriesPer100g) / 100);
      setСaloriesСonsumed(currentCalories);
      setProductToAdd({
        productId: productId,
        date: formattedCurrentDate,
        amount: gramsEat,
        calories: currentCalories,
      });
      setError('');
      setIsError(false);
    } else {
      setСaloriesСonsumed(calories);
      setProductToAdd({
        productId: '',
        date: '',
        amount: '',
        calories: '',
      });
    }
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <Formik
        initialValues={{ name: '', mass: '' }}
        // validationSchema={productValidation}
        onSubmit={applyAddProduct}
      >
        <Form>
          <FieldWrapper>
            <FieldProduct
              type="text"
              name="name"
              value={formattedTitle}
              disabled
            />
            <FieldGramsWrapper>
              <FieldGrams
                type="number"
                name="calories"
                autoComplete="off"
                required
                step="1"
                min="1"
                max="1000"
                onChange={handleInputChange}
              />
              <GramTxt>grams</GramTxt>
            </FieldGramsWrapper>
          </FieldWrapper>
          <TextStyled>
            Calories: <SpanStyled>{caloriesСonsumed}</SpanStyled>
          </TextStyled>
          <BtnWrapper>
            <BtnOrange type="submit">Add to diary</BtnOrange>
            <BtnCancel type="button" onClick={() => closeModal()}>
              Cancel
            </BtnCancel>
          </BtnWrapper>
        </Form>
      </Formik>
    </>
  );
};
export default AddProductForm;
