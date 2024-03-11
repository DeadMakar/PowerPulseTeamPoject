import {
  Block,
  SubCategoryName,
  CategoryTitle,
} from './ExercisesSubcategoriesItem.styled';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

const ExercisesSubcategoriesItem = ({ category: { filter, name, imgURL } }) => {
  return (
    <Block
      style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
    >
      <SubCategoryName>{capitalizeFirstLetter(name)}</SubCategoryName>
      <CategoryTitle>{filter}</CategoryTitle>
    </Block>
  );
};

export default ExercisesSubcategoriesItem;
