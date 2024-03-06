import styled from 'styled-components';
import { globalColor } from '../../styles/root';

// как оставить рамку если менее 375 пикселей

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  /* min-width: 335px;
  min-height: 362px; */

  padding: 48px 0;

  @media screen and (min-width: 768px) {
    padding: 64px 0;
  }

  /* @media screen and (min-width: 768px) {
    min-width: 430px;
    min-height: 428px;
  } */
`;

export const ImgStyled = styled.img`
  width: 118px;
  margin-bottom: 13px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TitleStyled = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  color: ${globalColor.colorWhite};
  margin-bottom: 16px;
`;

export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;
  /* &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:last-child {
  } */

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const SpanStyled = styled.span`
  color: #e6533c;
`;

export const LinkBtnStyled = styled.a`
  display: block;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${globalColor.colorWhite};

  border-radius: 12px;
  padding: 12px 32px;
  width: 157px;
  height: 42px;
  color: white;
  background-color: ${globalColor.colorOrange};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    height: 52px;
  }
`;

export const LinkStyled = styled.a`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SvgArrow = styled.svg`
  stroke: rgba(239, 237, 232, 0.3);
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;
