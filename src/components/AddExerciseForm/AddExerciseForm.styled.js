import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const WrapperDiv = styled.div`
  min-width: 335px;
  padding-top: 48px;

  @media screen and (min-width: 768px) {
    width: 694px;
    display: flex;
  }
`;

export const WrapperPart1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    padding-left: 32px;
  }
`;

export const WrapperPart2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: end;
    padding-left: 16px;
    padding-right: 32px;
    margin-bottom: 48px;
  }
`;

export const ImgStyled = styled.img`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 270px;
  height: 226px;
  margin-bottom: 14px;
`;

export const TimeTextStyled = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  color: rgba(239, 237, 232, 0.4);
  margin-bottom: 4px;
`;

// export const TimerBlock = styled(CountdownCircleTimer)`
//   /* width: 125px;
//   height: 124px; */
//   /* outline: 2px solid ${globalColor.colorOrange}; */
//   margin-bottom: 14px;
// `;

// export const TimerBlock = styled.div`
//   width: 125px;
//   height: 124px;
//   outline: 2px solid ${globalColor.colorOrange};
//   margin-bottom: 14px;
// `;

export const PlayTimerBtn = styled.button`
  display: block;
  margin-top: 14px;
  margin-bottom: 8px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const PauseTimerBtn = styled(PlayTimerBtn)``;

export const SvgStyled = styled.svg`
  width: 25px;
  height: 26px;
  fill: ${globalColor.colorOrange};
`;

export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);

  /* @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  } */
`;

export const SpanStyled = styled.span`
  color: ${globalColor.colorOrange};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 254px;
  }
`;

export const ItemStyled = styled.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 12px;
  width: 147px;
  /* height: 62px; */
  overflow: hidden;
  background-color: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`;

export const ItemTextStyled = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.4);
  margin-bottom: 4px;
`;

export const SpanItemsStyled = styled.span`
  display: block;
  color: ${globalColor.colorWhite};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  &::first-letter {
    text-transform: uppercase;
  }
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
  height: 52px;
  background-color: ${globalColor.colorOrange};
`;
