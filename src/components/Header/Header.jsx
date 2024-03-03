// import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
// import UserBar from '../UserBar/index';
import sprite from '../../assets/sprite.svg';
import { Logo } from '../Logo';
import {
  HeaderContainer,
  NavWraper,
  Navigation,
  NavigationLink,
  NavigationLinkItem,
  SecondNavWraper,
} from './Header.styled';
const Header = () => {
  //   const { profile } = useSelector((state) => state.profile);

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
            {/* <UserBar /> */}
          </NavigationLinkItem>
          <MediaQuery minWidth={1440}>
            <Link onClick to="/">
              <span>Logout</span>
              <svg>
                <use href={`${sprite}#icon-log-out-01`} />
              </svg>
            </Link>
          </MediaQuery>
          <MediaQuery maxWidth={1439}>
            <svg>
              <use href={`${sprite}#icon-menu`} />
            </svg>
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
