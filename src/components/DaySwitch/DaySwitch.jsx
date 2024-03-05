import { useState } from 'react';
import { changeDate } from '../../helpers';
import sprite from '../../assets/sprite.svg';
import {
  BtnNext,
  BtnPrev,
  CalendarBtn,
  CalendarIconSvg,
  SvgPrev,
  SvgNext,
  ContainerWrap,
  DateLabel,
} from './DaySwitch.styled';
import { Datepicker } from '../Datepicker';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const DaySwitch = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isActivePrev, setIsActivePrev] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const userDateRegistration = '01/02/2024';
  const openCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const goToPreviousDay = () => {
    setIsActivePrev(true);
    const previousDay = new Date(currentDate);
    const formattedPreviousDay = changeDate(previousDay);
    if (formattedPreviousDay > userDateRegistration) {
      previousDay.setDate(previousDay.getDate() - 1);
      setCurrentDate(previousDay);
      setSelectedDate(previousDay);
      setIsActivePrev(false);
    } else {
      toast.error(
        `SORRY!!! Selected date cannot be earlier than the registration date: ${userDateRegistration}.`,
        {
          theme: 'dark',
        }
      );
      setIsActivePrev(true);
    }
  };

  const goToNextDay = () => {
    setIsActiveNext(true);
    const today = changeDate(new Date());
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    if (nextDay > new Date()) {
      toast.error(
        `SORRY!!! Selected date cannot be later than today's date: ${today}.`,
        {
          theme: 'dark',
        }
      );
      setIsActiveNext(true);
    } else {
      setCurrentDate(nextDay);
      setSelectedDate(nextDay);
      setIsActiveNext(false);
    }
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  return (
    <ContainerWrap>
      <DateLabel onClick={openCalendar}>
        {format(selectedDate, 'dd/mm/yyyy')}
      </DateLabel>
      <CalendarBtn onClick={openCalendar}>
        <CalendarIconSvg>
          <use href={sprite + '#icon-calendar'} />
        </CalendarIconSvg>
      </CalendarBtn>
      <BtnPrev type="button" onClick={goToPreviousDay}>
        <SvgPrev className={isActivePrev ? 'passivePrev' : ''}>
          <use href={sprite + '#icon-chevron-left'} />
        </SvgPrev>
      </BtnPrev>
      <BtnNext type="button" onClick={goToNextDay}>
        <SvgNext className={isActiveNext ? 'passiveNext' : ''}>
          <use href={sprite + '#icon-chevron-right'} />
        </SvgNext>
      </BtnNext>

      <Datepicker
        selectedDate={selectedDate}
        dateFormat="dd/MM/yyyy"
        setSelectedDate={setSelectedDate}
        isOpen={isCalendarOpen}
        onClose={closeCalendar}
        setCurrentDate={setCurrentDate}
        userDateRegistration={userDateRegistration}
        minDate={new Date(userDateRegistration)}
      />
    </ContainerWrap>
  );
};

export default DaySwitch;
