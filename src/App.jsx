import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { WelcomePage } from './pages/WelcomePage';
import { ErrorPage } from './pages/ErrorPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Header</p>} />

      <Route path="/welcome" element={<WelcomePage />} />

      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/signin" element={<SignInPage />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/diary" element={<p>DiaryPage</p>} />

      <Route path="/products" element={<p>ProductsPage</p>} />

      <Route path="/exercises" element={<p>ExercisesPage</p>} />

      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
