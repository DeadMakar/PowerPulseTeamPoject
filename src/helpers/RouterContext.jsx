import { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const location = useLocation();
  return (
    <RouterContext.Provider value={{ location }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
