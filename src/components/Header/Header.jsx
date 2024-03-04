import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
// import UserBar from '../UserBar/index';
import sprite from '../../assets/sprite.svg';
import { Logo } from '../Logo';
import {
  HeaderContainer,
  LogoutIconHeder,
  NavWraper,
  Navigation,
  NavigationLink,
  NavigationLinkItem,
  SecondNavWraper,
} from './Header.styled';
import { LogoutStyled } from '../LogOutBtn/LogOutBtn.styled';
// import { logOut } from '../../redux/auth/operations';
// import { useDispatch } from 'react-redux';
const Header = () => {
  // const dispatch = useDispatch();

  //   const { profile } = useSelector((state) => state.profile);

  // const handleLogOut = () => {
  //   dispatch(logOut());
  // };

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
            <LogoutStyled onClick to="/welcome">
              <span>Logout</span>
              <LogoutIconHeder>
                <use href={`${sprite}#icon-log-out-01`} />
              </LogoutIconHeder>
            </LogoutStyled>
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
