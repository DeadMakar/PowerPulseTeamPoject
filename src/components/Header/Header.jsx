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
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const user = useSelector(selectUser);
  const userMetrics = user?.userMetrics;

  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>
        {isLoggedIn && userMetrics && (
          <SecondNavWraper>
            <MediaQuery minWidth={1440}>
              <NavWraper>
                <NavigationLink
                  to="/diary"
                  activeclassname="active"
                  exact="true"
                >
                  Diary
                </NavigationLink>
                <NavigationLink
                  to="/products"
                  activeclassname="active"
                  exact="true"
                >
                  Products
                </NavigationLink>
                <NavigationLink
                  to="/exercises"
                  activeclassname="active"
                  exact="true"
                >
                  Exercises
                </NavigationLink>
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
