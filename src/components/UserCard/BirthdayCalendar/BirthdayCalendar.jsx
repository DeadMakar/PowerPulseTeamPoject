import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, getMonth, getYear } from 'date-fns';
import sprite from '../../../assets/sprite.svg';
import range from 'lodash/range';
import {
  CalendarBox,
  CalendarBirthdayStyles,
  HeaderBox,
  HeaderData,
  MonthYearText,
  OptionSelector,
  SvgCalendar,
  SvgHeader,
  TitleBtn,
} from './BirthdayCalendar.styled';

const BirthdayCalendar = ({ onDateChange, savedBirthday }) => {
  const [startDate, setStartDate] = useState(
    savedBirthday === '00.00.0000' ? new Date() : new Date(savedBirthday)
  );

  const years = range(1950, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    changeYear,
    changeMonth,
  }) => {
    return (
      <HeaderBox>
        <SvgHeader onClick={decreaseMonth}>
          <use href={sprite + '#icon-chevron-left'} />
        </SvgHeader>

        <HeaderData>
          <MonthYearText
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <OptionSelector key={option} value={option}>
                {option}
              </OptionSelector>
            ))}
          </MonthYearText>
          <MonthYearText
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <OptionSelector key={option} value={option}>
                {option}
              </OptionSelector>
            ))}
          </MonthYearText>
        </HeaderData>

        <SvgHeader onClick={increaseMonth}>
          <use href={sprite + '#icon-chevron-right'} />
        </SvgHeader>
      </HeaderBox>
    );
  };

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <CalendarBox>
        <TitleBtn type="button" onClick={onClick} ref={ref}>
          {format(startDate, 'dd.MM.yyyy')}
          <SvgCalendar onClick={onClick} ref={ref}>
            <use href={`${sprite}#icon-calendar`} />
          </SvgCalendar>
        </TitleBtn>
      </CalendarBox>
    );
  });

  CustomInput.displayName = 'CustomInput';

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          onDateChange(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        renderCustomHeader={(props) => (
          <CustomHeader {...props} value={savedBirthday} />
        )}
      />
      <CalendarBirthdayStyles />
    </>
  );
};

export default BirthdayCalendar;
