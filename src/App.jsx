import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { default as RestrictedRoute } from './RestrictedRoute';
import { default as PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from './redux/auth/selectors';
import { Loader } from './components/Loader';
import { GlobalStyles } from './styles/GlobalStyles';
import { refreshUser } from './redux/auth/operations';
import { CalendarGlobalStyles } from './styles/CalendarGlobalStyles';

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

  const user = useSelector(selectUser);
  // const { userMetrics } = user;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const loading = useSelector(selectIsRefreshing);

  const userMetrics = isLoggedIn && user?.userMetrics ? true : false;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isLoggedIn ? <DiaryPage /> : <WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              !userMetrics ? (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<SignInPage />}
                />
              ) : (
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<SignInPage />}
                />
              )
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
              !userMetrics ? (
                <Navigate to="/profile" replace />
              ) : (
                <PrivateRoute redirectTo="/" component={<DiaryPage />} />
              )
            }
          />
          <Route
            path="/products"
            element={
              !userMetrics ? (
                <Navigate to="/profile" replace />
              ) : (
                <PrivateRoute redirectTo="/" component={<ProductsPage />} />
              )
            }
          />
          <Route
            path="/exercises"
            element={
              !userMetrics ? (
                <Navigate to="/profile" replace />
              ) : (
                <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
              )
            }
          >
            <Route index element={<Navigate to="/exercises" replace />} />
            {/* <Route
    path="/exercises/:filter"
    element={<ExercisesSubcategoriesList />}
  />
  <Route
    path="/exercises/:filter/:filterList"
    element={<ExercisesList />}
  /> */}
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
      <CalendarGlobalStyles />
    </Suspense>
  );
}

export default App;
