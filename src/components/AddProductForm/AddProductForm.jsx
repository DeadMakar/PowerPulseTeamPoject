import { Formik } from 'formik';
// import * as Yup from 'yup';
import {
  Form,
  Field,
  FieldWrapper,
  SpanStyled,
  TextStyled,
  BtnWrapper,
  BtnOrange,
  BtnCancel,
  GramTxt,
  FieldGramsWrapper,
} from './AddProductForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryError } from '../../redux/diary/selectors';
import { useState } from 'react';
import { default as changeDate } from '../../helpers/changeDate';
import { toast } from 'react-toastify';
import { addDiaryProducts } from '../../redux/Diary/operations';

// const productValidation = Yup.object().shape({
//   // name: Yup.string().required('Required'),
//   // mass: Yup.number().required('Required'),
// });

export const AddProductForm = ({
  closeModallAddProductForm,
  onClick,
  productTitle,
  calories,
  productId,
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
    if (
      (0 >= productToAdd.amount || 3000 <= productToAdd.amount) &&
      productToAdd.amount
    ) {
      setError('Entering value must be at range 1g to 3000g');
      setIsError(true);
      setСaloriesСonsumed(calories);
    } else if (
      Object.keys(productToAdd).length < 0 ||
      productToAdd.amount === ''
    ) {
      setError('Enter amount*');
      setIsError(true);
    } else if (!errorAdding) {
      setError('');
      setIsError(false);
      try {
        closeModallAddProductForm();
        onClick(productToAdd.calories);
        dispatch(addDiaryProducts(productToAdd));
        console.log(productToAdd);
      } catch (error) {
        toast.error('Sorry, something went wrong, please try again', {
          theme: 'dark',
        });
      }
    } else {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return;
    }
  };

  const handleInputChange = (e) => {
    const gramsEat = parseFloat(e.target.value);
    const caloriesPer100g = parseFloat(calories);

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

  return (
    <Formik
      initialValues={{ name: '', mass: '' }}
      // validationSchema={productValidation}
      onSubmit={applyAddProduct}
    >
      <Form>
        <FieldWrapper>
          <Field type="text" name="name" value={formattedTitle} disabled />
          <FieldGramsWrapper>
            <Field
              type="number"
              name="calories"
              // placeholder="100"
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
          {/* <BtnOrange type="submit">Add to diary</BtnOrange> */}
          <BtnCancel
            type="button"
            onClick={() => {
              closeModallAddProductForm();
            }}
          >
            Cancel
          </BtnCancel>
        </BtnWrapper>
      </Form>
    </Formik>
  );
};
export default AddProductForm;
