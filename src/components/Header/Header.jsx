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

// import { useDispatch } from 'react-redux';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import UserBar from '../UserBar/UserBar';
const Header = () => {
  // const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <Navigation>
        <Link to="/">
          <Logo />
        </Link>

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
            <BurgerBtn>
              <use href={`${sprite}#icon-menu`} />
            </BurgerBtn>
          </MediaQuery>
        </SecondNavWraper>
      </Navigation>
      {/* <div>
        modal
      </div> */}
    </HeaderContainer>
  );
};
export default Header;
