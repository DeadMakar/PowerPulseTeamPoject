import { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const DaySwitch = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isActivePrev, setIsActivePrev] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const { createdAt } = useSelector(selectUser);
  const userDateRegistration = createdAt;

  const openCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const goToPreviousDay = () => {
    setIsActivePrev(true);
    const previousDay = new Date(currentDate);
    if (previousDay > userDateRegistration) {
      previousDay.setDate(previousDay.getDate() - 1);
      setCurrentDate(previousDay);
      setSelectedDate(previousDay);
      setIsActivePrev(false);
    } else {
      toast.error(
        `SORRY!!! Selected date cannot be earlier than the registration date: ${userDateRegistration.toLocaleDateString()}.`,
        {
          theme: 'dark',
        }
      );
      setIsActivePrev(true);
    }
  };

  const goToNextDay = () => {
    setIsActiveNext(true);
    const today = new Date();
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    if (nextDay <= today) {
      setCurrentDate(nextDay);
      setSelectedDate(nextDay);
      setIsActiveNext(false);
    } else {
      toast.error(
        `SORRY!!! Selected date cannot be later than today's date: ${today.toLocaleDateString()}.`,
        {
          theme: 'dark',
        }
      );
      setIsActiveNext(true);
    }
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  return (
    <ContainerWrap>
      <DateLabel onClick={openCalendar}>
        {format(selectedDate, 'dd/MM/yyyy')}
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
        minDate={userDateRegistration}
      />
    </ContainerWrap>
  );
};

export default DaySwitch;
