import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Header';
import { TitlePage } from '../TitlePage';

const Layout = () => {
  const location = useLocation();
  const showHeader =
    ['/diary', '/profile', '/exercises', '/products'].includes(
      location.pathname
    ) || location.pathname.startsWith('/diary');

  const isDiaryPage = location.pathname === '/' && (
    <TitlePage contentText="Diary" />
  );

  return (
    <>
      {(showHeader || isDiaryPage) && <Header />}
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Layout;
