import styled, { createGlobalStyle } from 'styled-components';
import { globalColor } from '../../../styles/root';

export const CalendarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  padding: 15px;
  font-size: 14px;
  height: 52px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  width: 161px;

  @media screen and (min-width: 768px) {
    width: 187px;
  }

  @media screen and (min-width: 1440px) {
    width: 187px;
  }
`;

export const TitleBtn = styled.button`
  color: ${globalColor.colorWhite};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const SvgCalendar = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${globalColor.colorWhite};
  fill: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${globalColor.colorOrange};
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const SvgHeader = styled.svg`
  width: 8px;
  height: 12px;
  stroke: ${globalColor.colorWhite};
  fill: ${globalColor.colorWhite};
  cursor: pointer;
`;

export const HeaderData = styled.p`
  color: ${globalColor.colorWhite};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`;

export const MonthYearText = styled.select`
  color: ${globalColor.colorWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  background-color: transparent;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* padding: 2px 30px 2px 2px; */
  border: none;

  overflow: hidden;
`;

export const OptionSelector = styled.option`
  background-color: ${globalColor.colorOrange};
  height: 2px;
`;

export const CalendarGlobalStylesAddition = createGlobalStyle`

  .react-datepicker {
  transform: translate(-70%, -90%);
 

    @media screen and (min-width: 768px) {
  transform: translate(-65%, 0%);
  }

  }

   .react-datepicker__day-names {
    padding: 0;

  }`;
