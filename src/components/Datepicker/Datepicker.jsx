import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import { Wrapper } from './Datepicker.styled';
import { CalendarGlobalStyles } from '../../styles/CalendarGlobalStyles';
import { toast } from 'react-toastify';
import { changeDate } from '../../helpers';

const Datepicker = ({
  selectedDate,
  setSelectedDate,
  isOpen,
  onClose,
  setCurrentDate,
  userDateRegistration,
}) => {
  const today = changeDate(new Date());

  const handleDateChange = (date) => {
    const formattedDate = changeDate(date);
    if (today >= formattedDate && formattedDate >= userDateRegistration) {
      setSelectedDate(date);
      setCurrentDate(date);
      onClose();
    } else {
      toast.error(
        `SORRY!!! You can review the information from the day of your registration: ${userDateRegistration} up to today: ${today}. `,
        {
          theme: 'dark',
        }
      );
    }
  };

  const isDateDisabled = (date) => {
    return date < userDateRegistration && date > today;
  };

  const dayClassName = (date) => {
    return isDateDisabled(date) ? 'disabled-day' : null;
  };

  return (
    <Wrapper>
      <DatePicker
        selected={selectedDate}
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        open={isOpen}
        customInput={<div style={{ display: 'none' }} />}
        onChange={handleDateChange}
        minDate={new Date(userDateRegistration)}
        maxDate={new Date(today)}
        dayClassName={dayClassName}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};

export default Datepicker;
