import styled from 'styled-components';
import { globalColor } from '../../styles/root';

import { Form as FormikForm, Field as FormikField } from 'formik';

export const WrapperDiv = styled.div`
  padding: 48px 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const Form = styled(FormikForm)`
  /* display: flex;
  flex-direction: column; */
  /* position: relative; */

  /* min-width: 335px;
  min-height: 280px; */

  /* padding: 48px 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px; */
  /* } */
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;

  position: relative;
  justify-content: center;
  align-items: сenter;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  /* min-width: 335px;
  min-height: 280px; */
`;

export const FieldProduct = styled(FormikField)`
  border: 1px solid ${globalColor.colorOrange};
  border-radius: 12px;
  padding: 8px 14px;
  width: 287px;
  height: 34px;
  /* width: 100%; */
  /* width: 287px; */
  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
  }
  color: ${globalColor.colorWhite};
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: rgba(239, 237, 232, 0.4);
  }
`;

export const FieldGrams = styled(FormikField)`
  border: 1px solid ${globalColor.colorOrange};
  border-radius: 12px;
  padding: 8px 14px;
  width: 100%;
  height: 34px;
  color: ${globalColor.colorWhite};
  background-color: transparent;
  outline: none;

  position: relative;

  &::placeholder {
    color: rgba(239, 237, 232, 0.4);
  }
  width: 287px;
  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`;

export const GramTxt = styled.span`
  position: absolute;
  right: 14px;
  bottom: 8px;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
  @media screen and (min-width: 768px) {
    bottom: 11px;
  }
`;

export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const SpanStyled = styled.span`
  color: #e6533c;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const BtnOrange = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${globalColor.colorWhite};
  border: 0;
  border-radius: 12px;
  padding: 12px 32px;
  width: 151px;
  height: 42px;
  background-color: ${globalColor.colorOrange};
  @media screen and (min-width: 768px) {
    height: 52px;
  }
`;

export const BtnCancel = styled(BtnOrange)`
  color: ${globalColor.colorWhite};
  /* background-color: ${globalColor.colorBlack}; */
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  width: 121px;
  @media screen and (min-width: 768px) {
    width: 142px;
  }
`;
