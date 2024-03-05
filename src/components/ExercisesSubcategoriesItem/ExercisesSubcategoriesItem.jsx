import {
  Block,
  SubCategoryName,
  CategoryTitle,
} from './ExercisesSubcategoriesItem.styled';

const ExercisesSubcategoriesItem = ({ category: { filter, name, imgURL } }) => {
  return (
    <Block
      style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
    >
      <SubCategoryName>{name}</SubCategoryName>
      <CategoryTitle>{filter}</CategoryTitle>
    </Block>
  );
};
export default ExercisesSubcategoriesItem;
