import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  ButtonSignUp,
  Form,
  FormContainer,
  FormDescription,
  FormInput,
  FormLabel,
  FormTitle,
  FormWrapper,
  ImageToggle,
  LabelWrapper,
  SignInLink,
  Text,
  WrapperText,
  ErrorSpan,
  SvgError,
  BgWrapper,
} from './SignUpForm.styled';
import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import { StatisticsInfo } from '../StatisticsInfo';
import sprite from '../../assets/sprite.svg';
import { Logo } from '../Logo';
import { Container } from '../../styles/GlobalStyles';
import { register } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSuccessful } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidationCompleted, setIsValidationCompleted] = useState(false);
  const shouldForwardProp = (prop) =>
    !['isValidationCompleted', 'haserror'].includes(prop);
  const toggleCheckboxChange = () => {
    setShowPassword(!showPassword);
    setIsValidationCompleted(false);
  };

  const isRegisterSuccessful = useSelector(selectIsSuccessful);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string().required('Name is required'),
      email: Yup.string()
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Example: test@gmail.com')
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Enter a valid Password')
        .required('Password is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      dispatch(
        register({
          userName: values.userName,
          email: values.email,
          password: values.password,
        })
      );
      if (isRegisterSuccessful) {
        resetForm();
      }
    },
  });

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Container>
        <FormContainer>
          <FormWrapper>
            <Link to="/">
              <Logo />
            </Link>
            <FormTitle>Sign up</FormTitle>
            <FormDescription>
              Thank you for your interest in our platform. To complete the
              registration process, please provide us with the following
              information.
            </FormDescription>
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <LabelWrapper>
                <FormLabel>
                  <FormInput
                    id="name"
                    name="userName"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                    haserror={
                      !isValidationCompleted &&
                      formik.touched.userName &&
                      formik.errors.userName
                    }
                    isValidationCompleted={
                      !formik.errors.userName && formik.touched.userName
                    }
                  />
                  {formik.touched.userName && (
                    <ErrorSpan
                      style={{
                        color: formik.errors.userName ? '#D80027' : '#3CBF61',
                      }}
                    >
                      {formik.errors.userName ? (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-red`}></use>
                          </SvgError>
                          {`Error name, ${formik.errors.userName}`}
                        </>
                      ) : (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-green`}></use>
                          </SvgError>
                          {'Success name'}
                        </>
                      )}
                    </ErrorSpan>
                  )}
                </FormLabel>

                <FormLabel>
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    haserror={
                      !isValidationCompleted &&
                      formik.touched.email &&
                      formik.errors.email
                    }
                    isValidationCompleted={
                      !formik.errors.email && formik.touched.email
                    }
                  />
                  {formik.touched.email && (
                    <ErrorSpan
                      style={{
                        color: formik.errors.email ? '#D80027' : '#3CBF61',
                      }}
                    >
                      {formik.errors.email ? (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-red`}></use>
                          </SvgError>
                          {`Error email. ${formik.errors.email}`}
                        </>
                      ) : (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-green`}></use>
                          </SvgError>
                          {'Success email'}
                        </>
                      )}
                    </ErrorSpan>
                  )}
                </FormLabel>
                <FormLabel>
                  <FormInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    haserror={
                      !isValidationCompleted &&
                      formik.touched.password &&
                      formik.errors.password
                    }
                    isValidationCompleted={
                      !formik.errors.password && formik.touched.password
                    }
                  />
                  <>
                    {showPassword ? (
                      <ImageToggle onClick={toggleCheckboxChange}>
                        <use href={`${sprite}#icon-eye`}></use>
                      </ImageToggle>
                    ) : (
                      <ImageToggle onClick={toggleCheckboxChange}>
                        <use href={`${sprite}#icon-eye-off`}></use>
                      </ImageToggle>
                    )}
                  </>
                  {formik.touched.password && (
                    <ErrorSpan
                      style={{
                        color: formik.errors.password ? '#D80027' : '#3CBF61',
                      }}
                    >
                      {formik.errors.password ? (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-red`}></use>
                          </SvgError>
                          {`Error password, ${formik.errors.password}`}
                        </>
                      ) : (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-green`}></use>
                          </SvgError>
                          {'Success password'}
                        </>
                      )}
                    </ErrorSpan>
                  )}
                </FormLabel>
              </LabelWrapper>
              <ButtonSignUp type="Submit">Sign Up</ButtonSignUp>
            </Form>

            <WrapperText>
              <Text>Already have an account?</Text>
              <SignInLink to={'/signin'}>Sing In</SignInLink>
            </WrapperText>
          </FormWrapper>
          <BgWrapper>{<StatisticsInfo />}</BgWrapper>
        </FormContainer>
      </Container>
    </StyleSheetManager>
  );
};

export default SignUpForm;
