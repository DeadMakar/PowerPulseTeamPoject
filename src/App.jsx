import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { DiaryPage } from './pages/DiaryPage';
import { WelcomePage } from './pages/WelcomePage';
import { ErrorPage } from './pages/ErrorPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { ExercisesPage } from './pages/ExercisesPage';
import { ProductsPage } from './pages/ProductsPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/welcome" element={<WelcomePage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/signin" element={<SignInPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/diary" element={<DiaryPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/exercises" element={<ExercisesPage />} />

        <Route path="/error" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
