import { WrapperStyled } from './ExercisesSubcategoriesList.styled';
import { NavLink } from 'react-router-dom';

const ExercisesSubcategoriesList = ({ arr }) => {
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <WrapperStyled>
      {arr.map(({ name, imgURL, _id, filter }) => {
        return (
          <NavLink to={`/exercises/${filter}/${name}`} key={_id}>
            <ExercisesSubcategoriesItem
              fig={imgURL}
              nameImg={ucFirst(name)}
              category={filter}
            />
          </NavLink>
        );
      })}
    </WrapperStyled>
  );
};

export default ExercisesSubcategoriesList;
