import { useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import { LogoutIcon } from '../LogOutBtn/LogOutBtn.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import {
  BackdropMenu,
  BurgerNav,
  CloseBtn,
  IconClose,
  LogOutStyled,
  MenuContainer,
  NavContainer,
  SpanText,
} from './MobileMenu.styled';

const MobileMenu = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    onClick();
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  return (
    <BackdropMenu onClick={handleBackdropClick}>
      <MenuContainer>
        <CloseBtn onClick={handleCloseClick}>
          <IconClose>
            <use href={`${sprite}#icon-x`} />
          </IconClose>
        </CloseBtn>
        <NavContainer>
          <BurgerNav to="/diary" onClick={handleCloseClick}>
            Diary
          </BurgerNav>
          <BurgerNav to="/products" onClick={handleCloseClick}>
            Products
          </BurgerNav>
          <BurgerNav to="/exercises" onClick={handleCloseClick}>
            Exercises
          </BurgerNav>
        </NavContainer>
        <LogOutStyled to="/welcome" onClick={handleLogOut}>
          <SpanText>Logout</SpanText>
          <LogoutIcon>
            <use href={`${sprite}#icon-log-out-02`} />
          </LogoutIcon>
        </LogOutStyled>
      </MenuContainer>
    </BackdropMenu>
  );
};
export default MobileMenu;
