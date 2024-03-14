import {
  SpanStyled,
  TextStyled,
  BtnOrange,
  ImgStyled,
  ListStyled,
  ItemStyled,
  WrapperDiv,
  SpanItemsStyled,
  WrapperPart1,
  WrapperPart2,
  TimeTextStyled,
  // TimerBlock,
  ItemTextStyled,
} from './AddExerciseForm.styled';

import { TimerComponent } from './Timer';
import { changeDate } from '../../helpers';
import { useDispatch } from 'react-redux';
import { addDiaryExercise } from '../../redux/diary/operations';

export const AddExerciseForm = ({
  setReallyBurnedCalories,
  closeModalAddExersiceForm: closeModalForm,
  onClick: openModal,
  name,
  target,
  bodyPart,
  equipment,
  id,
  gifUrl,
  fullExerciseTime,
  burnedCalories,
  reallyBurnedCalories,
  timeOfTimer,
  setTimeOfTimer,
  setExersiceWasAdded,
}) => {
  const dispatch = useDispatch();

  const currentDate = new Date();
  const date = changeDate(currentDate);
  const parts = date.split('/');
  const formattedCurrentDate = `${parts[0]}-${parts[1]}-${parts[2]}`;

  const addNewExercise = (data) => {
    setExersiceWasAdded(true);
    dispatch(addDiaryExercise(data));
  };

  return (
    <WrapperDiv>
      <WrapperPart1>
        <ImgStyled src={gifUrl} alt="Exercise gif-photo" />
        <TimeTextStyled>Time</TimeTextStyled>
        {/* <TimerBlock /> */}
        <TimerComponent
          setTimeOfTimer={setTimeOfTimer}
          fullExerciseTime={fullExerciseTime}
          timeOfTimer={timeOfTimer}
          burnedCalories={burnedCalories}
          setReallyBurnedCalories={setReallyBurnedCalories}
        />
        <TextStyled>
          Burned calories:<SpanStyled> {reallyBurnedCalories}</SpanStyled>
        </TextStyled>
      </WrapperPart1>
      <WrapperPart2>
        <ListStyled>
          <ItemStyled>
            <ItemTextStyled>Name</ItemTextStyled>
            <SpanItemsStyled> {name}</SpanItemsStyled>
          </ItemStyled>
          <ItemStyled>
            <ItemTextStyled>Target</ItemTextStyled>{' '}
            <SpanItemsStyled>{target}</SpanItemsStyled>
          </ItemStyled>
          <ItemStyled>
            <ItemTextStyled>Body Part</ItemTextStyled>{' '}
            <SpanItemsStyled> {bodyPart}</SpanItemsStyled>
          </ItemStyled>
          <ItemStyled>
            <ItemTextStyled>Equipment</ItemTextStyled>{' '}
            <SpanItemsStyled>{equipment}</SpanItemsStyled>
          </ItemStyled>
        </ListStyled>
        <BtnOrange
          type="submit"
          onClick={() =>
            addNewExercise({
              exerciseId: id,
              date: formattedCurrentDate,
              calories: reallyBurnedCalories,
              time: timeOfTimer,
            })
          }
        >
          Add to diary
        </BtnOrange>
      </WrapperPart2>
    </WrapperDiv>
  );
};

export default AddExerciseForm;
