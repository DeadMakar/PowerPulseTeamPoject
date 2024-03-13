import { useDispatch, useSelector } from 'react-redux';

import {
  getExercises,
  getIsLoading,
  getError,
} from '../../redux/exercises/exercisesSlice';
import { useParams } from 'react-router-dom';
import {
  useEffect,
  // useRef
} from 'react';
import { fetchExercisesList } from '../../redux/exercises/operations';
import { ExercisesItem } from '../ExercisesItem';
import { ExercisesListWrapper, Wrapper } from './ExercisesList.styled';
import { Loader } from '../Loader';
import { ProductsItemStyled } from '../ProductsItem/ProductsItem.styled'; //?{}

const ExercisesList = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(getExercises);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { filter, filterList } = useParams();

  useEffect(() => {
    const getExercisesList = async () => {
      if (filter === 'Body parts') {
        dispatch(fetchExercisesList(filterList));
      }
    };
    getExercisesList();
  }, [dispatch, filterList]);

  return (
    <div>
      <div>
        {isLoading && !error && <Loader />}

        {!exercises ? (
          <p>you do not have any exersise category</p>
        ) : isLoading ? (
          <Loader />
        ) : (
          <Wrapper>
            <ExercisesListWrapper>
              {exercises.map((exercise) => (
                <ProductsItemStyled key={exercise._id}>
                  <ExercisesItem exercise={exercise} />
                </ProductsItemStyled>
              ))}
            </ExercisesListWrapper>
          </Wrapper>
        )}
      </div>
    </div>
  );
};

export default ExercisesList;
