import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { DiaryPage } from './pages/DiaryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Header</p>} />

      <Route path="/welcome" element={<p>WelcomePage</p>} />

      <Route path="/signup" element={<p>SignUpPage</p>} />

      <Route path="/signin" element={<p>SignInPage</p>} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/diary" element={<DiaryPage />} />

      <Route path="/products" element={<p>ProductsPage</p>} />

      <Route path="/exercises" element={<p>ExercisesPage</p>} />
    </Routes>
  );
}
export default App;
