import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* @media screen and (min-width: 1440px) {
    width: 440px;
  } */
`;

export const UserNameRole = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 1440px) {
    gap: 8px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const UserRole = styled.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.5);
`;

export const ListStyled = styled.ul`
  margin: 36px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    margin: 32px 0;
    gap: 16px;
    justify-content: center;
  }

  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  } */
`;

export const ItemListStyled = styled.li`
  width: 157px;
  height: 96px;
  padding: 14px;
  background-color: ${globalColor.colorOrange};
  border-radius: 12px;
  border: 1px solid #efede833;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 18px;
  }
`;

export const TitleStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TitleStyled = styled.h2`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 1.5;
  }
`;

export const DataValue = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const SvgWrapperText = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${globalColor.colorBeige};
  border-radius: 50%;
`;

export const SvgStyled = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${globalColor.colorOrange1};
`;

export const ExclamationSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const TextStyled = styled.p`
  font-size: 14px;
  line-height: 18px;

  color: ${globalColor.colorInput};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`;
