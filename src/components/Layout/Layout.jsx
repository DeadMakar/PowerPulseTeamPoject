import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Header';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Layout = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const showHeader =
    ['/diary', '/profile', '/products', '/exercises'].some((path) =>
      location.pathname.startsWith(path)
    ) ||
    (location.pathname === '/' && isLoggedIn);

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Layout;
