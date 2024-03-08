import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../Header';

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <ToastContainer />
    </>
  );
};

export default Layout;
