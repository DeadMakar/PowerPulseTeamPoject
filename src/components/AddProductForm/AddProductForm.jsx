import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Field,
  FieldWrapper,
  SpanStyled,
  TextStyled,
  BtnWrapper,
  BtnOrange,
  BtnCancel,
  CloseSvgBtn,
} from './AddProductForm.styled';
import sprite from '../../assets/sprite.svg';

const productValidation = Yup.object().shape({
  // name: Yup.string().required('Required'),
  // mass: Yup.number().required('Required'),
});

export const AddProductForm = ({ caloriesPlus, onAddProduct }) => {
  return (
    <>
      <CloseSvgBtn>
        <use href={`${sprite}#icon-x`}></use>
      </CloseSvgBtn>

      <Formik
        initialValues={{ name: '', mass: '' }}
        validationSchema={productValidation}
        onSubmit={(values, actions) => {
          // console.log('values :>> ', values);
          onAddProduct(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FieldWrapper>
            <Field type="text" name="name" placeholder="Banana" />
            <Field type="text" name="mass" placeholder="grams" />
          </FieldWrapper>
          <TextStyled>
            Calories: <SpanStyled>96 {caloriesPlus}</SpanStyled>
          </TextStyled>
          <BtnWrapper>
            <BtnOrange type="submit">Add to diary</BtnOrange>
            <BtnCancel type="button">Cancel </BtnCancel>
          </BtnWrapper>
        </Form>
      </Formik>
    </>
  );
};
export default AddProductForm;
