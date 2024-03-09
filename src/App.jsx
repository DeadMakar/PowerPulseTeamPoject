import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from './redux/auth/selectors';
import { Loader } from './components/Loader';
import { GlobalStyles } from './styles/GlobalStyles';
import { refreshUser } from './redux/auth/operations';
import { CalendarGlobalStyles } from './styles/CalendarGlobalStyles';
import { default as PrivateRoute } from './PrivateRoute';
import { default as RestrictedRoute } from './RestrictedRoute';

const Layout = lazy(() => import('./components/Layout/Layout'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const userMetrics = isLoggedIn && user?.userMetrics ? true : false;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<WelcomePage />}>
          <Route index element={isLoggedIn ? <DiaryPage /> : <WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/singin"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              !isLoggedIn ? <SignInPage /> : <Navigate to="/diary" replace />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/" component={<ProfilePage />} />
            }
          />
          <Route
            path="/diary"
            element={
              userMetrics ? <DiaryPage /> : <Navigate to="/profile" replace />
            }
          />
          <Route
            path="/products"
            element={
              userMetrics ? (
                <ProductsPage />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/exercises"
            element={
              userMetrics ? (
                <ExercisesPage />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
      <CalendarGlobalStyles />
    </Suspense>
  );
}

export default App;
