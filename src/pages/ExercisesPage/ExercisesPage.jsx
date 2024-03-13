import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { getError, getIsLoading } from '../../redux/exercises/categoriesSlice';

import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'; //=?
import { ExerciseCategories } from '../../components/ExercisesCategories';
import { fetchExercisesCategories } from '../../redux/exercises/operations';

import { Container } from '../../styles/GlobalStyles';
import {
  BackButton,
  BackGroundStyle,
  MixContainer,
  NavigationExercises,
} from './ExercisesPage.styled';

import { TitlePage } from '../../components/TitlePage';
import { Loader } from '../../components/Loader';
import { toast } from 'react-toastify';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { filter, filterList } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const gettingExercisesFilters = async () => {
      if (filter === undefined) {
        {
          toast.info('We are still awating for data', {
            theme: 'dark',
          });
        }
      } else {
        dispatch(fetchExercisesCategories(filter));
      }
    };
    gettingExercisesFilters();
  }, [dispatch, filter]);

  return (
    <BackGroundStyle>
      <Container>
        <MixContainer>
          <div>
            {filter !== undefined &&
            location.pathname.endsWith(filter.replace(' ', '%20')) ? null : (
              <BackButton onClick={() => navigate(-1)}>
                <svg style={{ fill: 'none' }}>
                  <use href={sprite + '#icon-arrow-left'} />
                </svg>
                Back{' '}
              </BackButton>
            )}
            <NavigationExercises>
              <TitlePage
                contentText={
                  filterList
                    ? capitalizeFirstLetter(filterList.split(' ')[0])
                    : 'Exercises'
                }
              />
              <ExerciseCategories />
            </NavigationExercises>

            {isLoading && !error ? (
              <Loader />
            ) : (
              <>
                <Suspense>
                  <Outlet />
                </Suspense>
              </>
            )}
          </div>
        </MixContainer>
      </Container>
    </BackGroundStyle>
  );
};

export default ExercisesPage;
