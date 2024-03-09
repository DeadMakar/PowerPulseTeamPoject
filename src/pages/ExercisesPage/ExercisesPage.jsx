import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { getError, getIsLoading } from '../../redux/exercises/categoriesSlice';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import { fetchExercisesCategories } from '../../redux/exercises/operations';
import { Container } from '../../styles/GlobalStyles';
import {
  ContainerExPage,
  BackButton,
  BackGroundStyle,
  MixContainer,
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
      if (
        filter !== undefined &&
        filterList !== undefined &&
        filterList.trim() !== ''
      ) {
        dispatch(fetchExercisesCategories({ filter: filter }));
      } else {
        toast.info('We are still awaiting for data', {
          theme: 'dark',
        });
      }
    };
    gettingExercisesFilters();
  }, [dispatch, filter, filterList]);

  return (
    <BackGroundStyle>
      <Container>
        <MixContainer>
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              {filter !== undefined &&
              location.pathname.endsWith(filter.replace(' ', '%20')) ? null : (
                <BackButton onClick={() => navigate(-1)}>
                  <svg style={{ fill: 'none' }}>
                    <use href={sprite + '#icon-arrow-left'} />
                  </svg>
                  Back
                </BackButton>
              )}
              <ContainerExPage>
                <TitlePage contentText="Exercises" />
                <ExercisesCategories />
              </ContainerExPage>

              {isLoading && !error && <Loader />}
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
          )}
        </MixContainer>
      </Container>
    </BackGroundStyle>
  );
};

export default ExercisesPage;
