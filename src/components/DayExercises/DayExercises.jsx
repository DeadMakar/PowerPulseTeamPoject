import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { globalColor } from '../../styles/root';
import {
  TableWrapper,
  TitleNav,
  TitleText,
  NavBlock,
  NavText,
  Nothing,
  Table,
  WrapperForItemsArray,
  MobileItemsHolder1,
  MobileItemsHolder2,
  MobileItemsHolder3,
  MobileItemsHolder4,
  TableDeleteButton,
  SvgTableStyled,
  ListMobileArray,
} from '../DayProducts/DayProducts.styled';
import {
  HeaderArray,
  ExerciseListArray,
  ExerciseListArrayItemMobile,
  HeaderItem,
  ExerciseListArrayItem,
} from './DayExercises.styled';
import {
  selectDiaryError,
  selectDiaryInformation,
  selectIsLoadingExercise,
} from '../../redux/diary/selectors';
import { deleteDiaryExercise } from '../../redux/diary/operations';
import { formatDateForDiary } from '../../helpers/formatDateForDiary';
import { Loader } from '../Loader';

const DayExercises = ({ currentDate }) => {
  const exerciseArr = useSelector(selectDiaryInformation);

  const isLoadingExercise = useSelector(selectIsLoadingExercise);

  const exercises = exerciseArr[1]?.exerciseArr;

  const isMobile = useMediaQuery('(max-width:768px)');
  const error = useSelector(selectDiaryError);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    const formatedDate = formatDateForDiary(currentDate);

    try {
      await dispatch(
        deleteDiaryExercise({ exerciseId: id, selectedDate: formatedDate })
      );
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
  };

  const timeFormat = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <TableWrapper>
      <TitleNav>
        <TitleText>Exercises</TitleText>
        <NavBlock>
          <NavLink
            to="/exercises"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavText>Add exercises</NavText>
            <svg
              style={{
                width: '16px',
                height: '16px',
                marginLeft: '8px',
                stroke: globalColor.colorOrange,
              }}
            >
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </NavLink>
        </NavBlock>
      </TitleNav>

      {exercises && exercises.length > 0 && !error ? (
        isMobile ? (
          <Table>
            <WrapperForItemsArray>
              {exercises?.map((exercise) => (
                <ExerciseListArray key={exercise._id}>
                  {isLoadingExercise ? (
                    <Loader />
                  ) : (
                    <>
                      <ExerciseListArrayItemMobile>
                        Body Part
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.bodyPart}
                      </ExerciseListArrayItemMobile>

                      <ExerciseListArrayItemMobile>
                        Equipment
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.equipment}
                      </ExerciseListArrayItemMobile>

                      <ExerciseListArrayItemMobile>
                        Name
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.name}
                      </ExerciseListArrayItemMobile>

                      <ListMobileArray>
                        <MobileItemsHolder1
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <ExerciseListArrayItemMobile>
                            Target
                          </ExerciseListArrayItemMobile>
                          <ExerciseListArrayItemMobile>
                            {exercise.target}
                          </ExerciseListArrayItemMobile>
                        </MobileItemsHolder1>
                        <MobileItemsHolder2
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <ExerciseListArrayItemMobile>
                            Burned Calories
                          </ExerciseListArrayItemMobile>
                          <ExerciseListArrayItemMobile>
                            {exercise.calories}
                          </ExerciseListArrayItemMobile>
                        </MobileItemsHolder2>
                        <MobileItemsHolder3
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <ExerciseListArrayItemMobile>
                            Time
                          </ExerciseListArrayItemMobile>
                          <ExerciseListArrayItemMobile>
                            {timeFormat(exercise.time)}
                          </ExerciseListArrayItemMobile>
                        </MobileItemsHolder3>
                        <MobileItemsHolder4
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <ExerciseListArrayItemMobile></ExerciseListArrayItemMobile>
                          <ExerciseListArrayItemMobile>
                            <TableDeleteButton
                              type="button"
                              onClick={() => handleDelete(exercise._id)}
                            >
                              <SvgTableStyled>
                                <use href={sprite + '#icon-trash-03'}></use>
                              </SvgTableStyled>
                            </TableDeleteButton>
                          </ExerciseListArrayItemMobile>
                        </MobileItemsHolder4>
                      </ListMobileArray>
                    </>
                  )}
                </ExerciseListArray>
              ))}
            </WrapperForItemsArray>
          </Table>
        ) : (
          <Table>
            <>
              <HeaderArray>
                <HeaderItem>Body Part</HeaderItem>
                <HeaderItem>Equipment</HeaderItem>
                <HeaderItem>Name</HeaderItem>
                <HeaderItem>Target</HeaderItem>
                <HeaderItem>Burned Calories</HeaderItem>
                <HeaderItem>Time</HeaderItem>
                <HeaderItem>{''}</HeaderItem>
              </HeaderArray>

              <WrapperForItemsArray>
                {exercises.map((exercise) => (
                  <ExerciseListArray key={exercise._id}>
                    {isLoadingExercise ? (
                      <Loader />
                    ) : (
                      <>
                        <ExerciseListArrayItem>
                          {exercise.bodyPart}
                        </ExerciseListArrayItem>
                        <ExerciseListArrayItem>
                          {exercise.equipment}
                        </ExerciseListArrayItem>
                        <ExerciseListArrayItem>
                          {exercise.name}
                        </ExerciseListArrayItem>
                        <ExerciseListArrayItem>
                          {exercise.target}
                        </ExerciseListArrayItem>
                        <ExerciseListArrayItem>
                          {exercise.calories}
                        </ExerciseListArrayItem>
                        <ExerciseListArrayItem>
                          {timeFormat(exercise.time)}
                        </ExerciseListArrayItem>
                        <ExerciseListArrayItem>
                          <TableDeleteButton
                            type="button"
                            onClick={() => handleDelete(exercise._id)}
                          >
                            <SvgTableStyled>
                              <use href={sprite + '#icon-trash-03'}></use>
                            </SvgTableStyled>
                          </TableDeleteButton>
                        </ExerciseListArrayItem>
                      </>
                    )}
                  </ExerciseListArray>
                ))}
              </WrapperForItemsArray>
            </>
          </Table>
        )
      ) : (
        <Nothing>Not found exercises</Nothing>
      )}
    </TableWrapper>
  );
};

export default DayExercises;
