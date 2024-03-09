// Layout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Header';

const Layout = () => {
  const location = useLocation();
  const showHeader = ![
    '/',
    '/welcome',
    '/signup',
    '/signin',
    '/error',
  ].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}

      <Outlet />

      <ToastContainer />
    </>
  );
};

export default Layout;
