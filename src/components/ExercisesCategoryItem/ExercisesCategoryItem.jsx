import { Block } from './ExercisesCategoryItem.styled';

const ExercisesCategoryItem = ({ category: { filter, name, imgURL } }) => {
  return (
    <div>
      <Block
        style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
      >
        <p>Filter: {filter}</p>
        <p>Name: {name}</p>
      </Block>
    </div>
  );
};

export default ExercisesCategoryItem;
