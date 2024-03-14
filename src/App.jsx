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
import { RouterProvider } from './helpers/RouterContext';
import { ExercisesSubcategoriesList } from './components/ExercisesSubcategoriesList';
import { ExercisesList } from './components/ExercisesList';

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

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <RouterProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                isLoggedIn && user?.userMetrics ? (
                  <DiaryPage />
                ) : (
                  <WelcomePage />
                )
              }
            />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route
              path="/signup"
              element={
                <RestrictedRoute
                  redirectTo="/signin"
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
                user?.userMetrics ? (
                  <DiaryPage />
                ) : (
                  <Navigate to="/profile" replace />
                )
              }
            />
            <Route
              path="/products"
              element={
                user?.userMetrics ? (
                  <ProductsPage />
                ) : (
                  <Navigate to="/profile" replace />
                )
              }
            />
            <Route
              path="/exercises"
              element={
                user?.userMetrics ? (
                  <ExercisesPage />
                ) : (
                  <Navigate to="/profile" replace />
                )
              }
            >
              <Route
                index
                element={<Navigate to="/exercises/Body parts" replace />}
              />
              <Route
                path="/exercises/:filter"
                element={<ExercisesSubcategoriesList />}
              />
              <Route
                path="/exercises/:filter/:filterList"
                element={<ExercisesList />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyles />
      <CalendarGlobalStyles />
    </RouterProvider>
  );
}

export default App;
