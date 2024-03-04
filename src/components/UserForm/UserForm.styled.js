import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const UserFormContainer = styled.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const LabelSection = styled.label`
  display: flex;
  flex-direction: column;
`;

export const BloodSexBox = styled.div`
  display: flex;

  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const BloodSexDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`;

export const BloodSexSection = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const ActiveSection = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 38px;
  padding-right: 10px;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: rgba(239, 237, 232, 0.6);
  padding: 12px 40px;
  border-radius: 12px;
  border-color: transparent;
  background-color: ${globalColor.colorOrange};

  &:hover,
  &:focus {
    color: ${globalColor.colorWhite};
  }
  &:disabled {
    background-color: ${globalColor.colorBlack};
    border: 1px solid rgba(239, 237, 232, 0.3);
    color: rgba(239, 237, 232, 0.6);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 16px 50px;
  }
`;
