import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const CloseSvgBtn = styled.svg`
  position: absolute;
  top: 10;
  right: 10;
  width: 14px;
  height: 14px;
  stroke: ${globalColor.colorWhite};
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 48px 32px;

  /* border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  min-width: 335px;
  min-height: 362px;

  @media screen and (min-width: 768px) {
    min-width: 430px;
    min-height: 428px;
  } */
`;

export const ImgStyled = styled.img`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  /* padding: 48px 33px 0px 32px; */
  width: 270px;
  height: 226px;
  margin-bottom: 32px;
`;

export const TextStyled = styled.p`
  margin-top: 20px; // временно
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
  color: ${globalColor.colorWhite};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
`;

export const SpanStyled2 = styled.span`
  display: block;
  color: ${globalColor.colorWhite};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ItemStyled = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.4);

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  /* padding: 12px 80px 12px 18px; */
  padding: 12px;
  width: 147px;
  /* height: 62px; */
  overflow: hidden;
  background-color: rgba(239, 237, 232, 0.05);
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
