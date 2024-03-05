import styled from 'styled-components';
import { globalColor } from '../../styles/root';

import { Form as FormikForm, Field as FormikField } from 'formik';

export const CloseSvgBtn = styled.svg`
  position: absolute;
  top: 10;
  right: 10;
  width: 14px;
  height: 14px;
  stroke: ${globalColor.colorWhite};
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  position: relative;

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  min-width: 335px;
  min-height: 280px;

  padding: 48px 24px 0;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Field = styled(FormikField)`
  border: 1px solid ${globalColor.colorOrange};
  border-radius: 12px;
  padding: 8px 193px 8px 14px;
  min-width: 287px;
  min-height: 34px;
  color: ${globalColor.colorWhite};
  background-color: ${globalColor.colorBlack};
  outline: none;

  &::placeholder {
    color: rgba(239, 237, 232, 0.4);
  }
`;

export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
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
  min-width: 151px;
  min-height: 42px;
  background-color: ${globalColor.colorOrange};
`;

export const BtnCancel = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${globalColor.colorWhite};
  background-color: ${globalColor.colorBlack};

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 12px 36px;
  width: 121px;
  height: 42px;
`;
