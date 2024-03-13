import {
  Block,
  SubCategoryName,
  CategoryTitle,
} from './ExercisesSubcategoriesItem.styled';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

const ExercisesSubcategoriesItem = ({ category: { filter, name, imgURL } }) => {
  return (
    <Block
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${imgURL})`,
      }}
    >
      <SubCategoryName>{capitalizeFirstLetter(name)}</SubCategoryName>
      <CategoryTitle>{filter}</CategoryTitle>
    </Block>
  );
};

export default ExercisesSubcategoriesItem;
