import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { Wrapper } from './Datepicker.styled';
import { CalendarGlobalStyles } from '../../styles/CalendarGlobalStyles';

const Datepicker = ({
  selectedDate,
  setSelectedDate,
  isOpen,
  onClose,
  setCurrentDate,
  userDateRegistration,
  dateFormat,
}) => {
  const today = new Date();

  const handleDateChange = (date) => {
    if (date >= userDateRegistration && date <= today) {
      setSelectedDate(date);
      setCurrentDate(date);
      onClose();
    } else {
      toast.error(
        `You can review the information from the day of your registration: ${userDateRegistration} up to today: ${today}. `,
        {
          theme: 'dark',
        }
      );
    }
  };

  return (
    <Wrapper>
      <DatePicker
        selected={selectedDate}
        dateFormat={dateFormat}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        open={isOpen}
        customInput={<div style={{ display: 'none' }} />}
        onChange={handleDateChange}
        minDate={new Date(userDateRegistration)}
        maxDate={today}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};

export default Datepicker;
