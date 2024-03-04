import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { LogoutIcon, LogoutStyled } from './LogOutBtn.styled';

const LogOutBtn = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(logOut());
    onClick();
  };

  return (
    <LogoutStyled to="/welcome" onClick={handleCloseClick}>
      <span>Logout</span>
      <LogoutIcon>
        <use href={`${sprite}#icon-logout`} />
      </LogoutIcon>
    </LogoutStyled>
  );
};
export default LogOutBtn;
