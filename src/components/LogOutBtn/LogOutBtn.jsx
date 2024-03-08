import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { LogoutIcon, LogoutStyled, SpanText } from './LogOutBtn.styled';

const LogOutBtn = ({ colorSvg = 'rgba(239, 237, 232, 1)' }) => {
  const dispatch = useDispatch();

  return (
    <LogoutStyled to="/welcome" onClick={() => dispatch(logOut())}>
      <SpanText>Logout</SpanText>
      <LogoutIcon $colorSvg={colorSvg}>
        <use href={`${sprite}#icon-log-out-01`} />
      </LogoutIcon>
    </LogoutStyled>
  );
};
export default LogOutBtn;
