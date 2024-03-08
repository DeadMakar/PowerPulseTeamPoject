import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DaySwitch } from '../../components/DaySwitch';
import { TitlePage } from '../../components/TitlePage';
import { DayProducts } from '../../components/DayProducts';
import { DayExercises } from '../../components/DayExercises';
import { DayDashboard } from '../../components/DayDashboard';
import { Loader } from '../../components/Loader';
import {
  selectDiaryInformation,
  selectDiaryIsLoading,
} from '../../redux/diary/selectors';
import { getAllDiaryInformation } from '../../redux/diary/operations';
import {
  DiaryConteiner,
  InfoContainer,
  ProdAndExercise,
  TitleAndSwitch,
} from './DiaryPage.styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import {
  selectBmr,
  selectIsRefreshing,
  selectUser,
} from '../../redux/auth/selectors';
import { changeDate } from '../../helpers';
import { refreshUser } from '../../redux/auth/operations';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectDiaryInformation);
  const isLoading = useSelector(selectDiaryIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const bmr = useSelector(selectBmr);
  const { addProducts, addExercises } = userData;
  const [currentDate, setCurrentDate] = useState(new Date());
  const user = useSelector(selectUser);
  const userDataRegistration = user ? user.createdAt : null;
  const formattedCurrentDate = changeDate(currentDate);
  const formattedUserDateRegistration = changeDate(userDataRegistration);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(refreshUser());
        await dispatch(getAllDiaryInformation(formattedCurrentDate));
      } catch (error) {
        toast.error('Sorry, something went wrong, please try again', {
          theme: 'dark',
        });
      }
    };
    fetchData();
  }, [dispatch, formattedCurrentDate, currentDate]);

  return (
    <Container>
      {isLoading || isRefreshing ? (
        <Loader />
      ) : (
        <DiaryConteiner>
          <TitleAndSwitch>
            <TitlePage contentText="Diary" />
            <DaySwitch
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              userDateRegistration={formattedUserDateRegistration}
            />
          </TitleAndSwitch>
          <InfoContainer>
            <DayDashboard userDiaryInformation={userData} bmr={bmr} />
            <ProdAndExercise>
              <DayProducts
                productsArray={addProducts}
                date={formattedCurrentDate}
              />
              <DayExercises
                exercisesArray={addExercises}
                date={formattedCurrentDate}
              />
            </ProdAndExercise>
          </InfoContainer>
        </DiaryConteiner>
      )}
    </Container>
  );
};

export default DiaryPage;
