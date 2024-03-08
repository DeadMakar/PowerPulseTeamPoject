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

// const productValidation = Yup.object().shape({
//   // name: Yup.string().required('Required'),
//   // mass: Yup.number().required('Required'),
// });

export const AddProductForm = ({ caloriesPlus, onAddProduct }) => {
  return (
    <Formik
      // initialValues={{ name: '', mass: '' }}
      // validationSchema={productValidation}
      onSubmit={(values, actions) => {
        // console.log('values :>> ', values);
        onAddProduct(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FieldWrapper>
          <Field type="text" name="name" placeholder="Banana" />
          <FieldGramsWrapper>
            <Field type="text" name="mass" />
            <GramTxt>gram</GramTxt>
          </FieldGramsWrapper>
        </FieldWrapper>
        <TextStyled>
          Calories: <SpanStyled>96 {caloriesPlus}</SpanStyled>
        </TextStyled>
        <BtnWrapper>
          <BtnOrange type="submit">Add to diary</BtnOrange>
          {/* <BtnOrange type="submit">Add to diary</BtnOrange> */}
          <BtnCancel type="button">Cancel </BtnCancel>
        </BtnWrapper>
      </Form>
    </Formik>
  );
};
export default AddProductForm;
