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
  GramTxt,
  FieldGramsWrapper,
} from './AddProductForm.styled';

import dbProducts from '../../../DB/products.json';
import { useState } from 'react';

const productValidation = Yup.object().shape({
  name: Yup.string().required('Required'),
  mass: Yup.number().required('Required'),
});

export const AddProductForm = ({ product, onAddProduct, closeModal }) => {
  // использовать productID и из него достать имя продукта?
  const {
    $oid: productID,
    title: productName,
    calories: baseCalories,
    weight,
  } = dbProducts[1];
  // console.log('title', title);
  // console.log('calories', calories);
  // console.log('weight', weight);

  const [consumedCalories, setConsumedCalories] = useState(0);

  const inputProductWeight = (event) => {
    const currentWeight = event.target.value;
    const consumedCalories = (currentWeight / weight) * baseCalories;
    setConsumedCalories(Math.round(consumedCalories));
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
        // initialValues={{ name: '', mass: '' }}
        validationSchema={productValidation}
        onSubmit={(values, actions) => {
          // console.log('values :>> ', values);
          onAddProduct(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FieldWrapper>
            <Field
              type="text"
              name="name"
              value={productName}
              placeholder="Product"
            />
            <FieldGramsWrapper>
              <Field type="text" name="mass" onChange={inputProductWeight} />
              <GramTxt>grams</GramTxt>
            </FieldGramsWrapper>
          </FieldWrapper>
          <TextStyled>
            Calories: <SpanStyled>{consumedCalories}</SpanStyled>
          </TextStyled>
          <BtnWrapper>
            {/* в редаксе !!! */}
            <BtnOrange type="submit" onSubmit={onAddProduct}>
              Add to diary
            </BtnOrange>
            <BtnCancel type="button" onClick={closeModal}>
              Cancel
            </BtnCancel>
          </BtnWrapper>
        </Form>
      </Formik>
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
};
export default AddProductForm;
