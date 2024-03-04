import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { LogoutIcon, LogoutStyled, SpanText } from './LogOutBtn.styled';

const LogOutBtn = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(logOut());
    onClick();
  };

  return (
    <LogoutStyled to="/welcome" onClick={handleCloseClick}>
      <SpanText>Logout</SpanText>
      <LogoutIcon>
        <use href={`${sprite}#icon-log-out-01`} />
      </LogoutIcon>
    </LogoutStyled>
  );
};
export default LogOutBtn;
