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
} from '../../redux/diary/selectors';
import {
  deleteDiaryExercise,
  getAllDiaryInformation,
} from '../../redux/diary/operations';

const DayExercises = ({ selectedDate }) => {
  const exerciseArr = useSelector(selectDiaryInformation);

  const exercises = exerciseArr[1]?.exerciseArr;

  const isMobile = useMediaQuery('(max-width:768px)');
  const error = useSelector(selectDiaryError);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteDiaryExercise(id, selectedDate));
      await dispatch(getAllDiaryInformation(selectedDate));
    } catch (error) {
      console.log(error);
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
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
                  <ExerciseListArrayItemMobile>
                    Body Part
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {exercise.exerciseId.bodyPart}
                  </ExerciseListArrayItemMobile>

                  <ExerciseListArrayItemMobile>
                    Equipment
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {exercise.exerciseId.equipment}
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    Name
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {exercise.exerciseId.name}
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
                        {exercise.exerciseId.target}
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
                        {exercise.time}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder3>
                    <MobileItemsHolder4
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        {''}
                      </ExerciseListArrayItemMobile>
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
                </ExerciseListArray>
              ))}
            </WrapperForItemsArray>
          </Table>
        ) : (
          <Table>
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
                  <ExerciseListArrayItem>
                    {exercise.exerciseId.bodyPart}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {exercise.exerciseId.equipment}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {exercise.exerciseId.name}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {exercise.exerciseId.target}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {exercise.calories}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>{exercise.time}</ExerciseListArrayItem>
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
                </ExerciseListArray>
              ))}
            </WrapperForItemsArray>
          </Table>
        )
      ) : (
        <Nothing>Not found exercises</Nothing>
      )}
    </TableWrapper>
  );
};

export default DayExercises;
