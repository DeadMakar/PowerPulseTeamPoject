import { ExercisesCategories } from '../../components/ExercisesCategories';
import { ExercisesSubcategoriesItem } from '../../components/ExercisesSubcategoriesItem';
import { TitlePage } from '../../components/TitlePage';

const ExercisesPage = () => {
  return (
    <div>
      <TitlePage contentText="halo" />
      <ExercisesCategories />
    </div>
  );
};
export default ExercisesPage;
