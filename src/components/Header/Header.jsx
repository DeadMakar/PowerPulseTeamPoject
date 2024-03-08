import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import sprite from '../../assets/sprite.svg';
import { Logo } from '../Logo';
import {
  BurgerBtn,
  HeaderContainer,
  NavWraper,
  Navigation,
  NavigationLink,
  NavigationLinkItem,
  SecondNavWraper,
} from './Header.styled';

import LogOutBtn from '../LogOutBtn/LogOutBtn';
import UserBar from '../UserBar/UserBar';
import { MobileMenu } from '../MobileMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        {isLoggedIn && (
          <SecondNavWraper>
            <MediaQuery minWidth={1440}>
              <NavWraper>
                <NavigationLink to="/diary">Diary</NavigationLink>
                <NavigationLink to="/products">Products</NavigationLink>
                <NavigationLink to="/exercises">Exercises</NavigationLink>
              </NavWraper>
            </MediaQuery>

            <NavigationLinkItem to="/profile">
              <UserBar />
            </NavigationLinkItem>
            <MediaQuery minWidth={1440}>
              <LogOutBtn />
            </MediaQuery>
            <MediaQuery maxWidth={1439}>
              <BurgerBtn onClick={toggleMenu}>
                <use href={`${sprite}#icon-menu`} />
              </BurgerBtn>
            </MediaQuery>
          </SecondNavWraper>
        )}
      </Navigation>
      <MediaQuery maxWidth={1439}>
        {isMenuOpen && <MobileMenu onClick={toggleMenu} />}
      </MediaQuery>
    </HeaderContainer>
  );
};
export default Header;
