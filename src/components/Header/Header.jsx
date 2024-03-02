import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import UserBar from '../UserBar/index';
import sprite from '../../../assets/sprite.svg';
const Header = () => {
  const { profile } = useSelector((state) => state.profile);

  return (
    <div>
      <nav>
        <Link to="/">Logo</Link>

        <div>
          <MediaQuery minWidth={1440}>
            {profile === null ? null : (
              <div>
                <NavLink to="/">Diary</NavLink>
                <NavLink to="/">Products</NavLink>
                <NavLink to="/">Exercises</NavLink>
              </div>
            )}
          </MediaQuery>

          <Link to="/profile">
            <UserBar />
          </Link>
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
        </div>
      </nav>
    </div>
  );
};
export default Header;
