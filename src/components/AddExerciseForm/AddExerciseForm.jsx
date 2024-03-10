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

import dbExercises from '../../../DB/exercises.json';
import { useEffect, useState } from 'react';
import { TimerComponent } from './Timer';

export const AddExerciseForm = () => {
  const [timeOfTimer, setTimeOfTimer] = useState(0);
  const [reallyBurnedCalories, setReallyBurnedCalories] = useState(0);

  const data = dbExercises[1];
  const {
    _id,
    name,
    target,
    bodyPart,
    equipment,
    gifUrl,
    burnedCalories,
    time,
  } = dbExercises[1];
  // console.log('data', data);
  // console.log('time', data.time);
  // console.log('timeOfTimer', timeOfTimer);

  // записую коли на паузу або завершився час

  useEffect(() => {
    const reallyCalories = (timeOfTimer / (time * 60)) * burnedCalories;
    setReallyBurnedCalories(reallyCalories.toFixed(0));
  }, [burnedCalories, time, timeOfTimer]);

  return (
    <WrapperDiv>
      <WrapperPart1>
        <ImgStyled src={gifUrl} alt="Exercise gif-photo" />
        <TimeTextStyled>Time</TimeTextStyled>
        {/* <TimerBlock /> */}
        <TimerComponent
          setTimeOfTimer={setTimeOfTimer}
          fullExerciseTime={time}
          timeOfTimer={timeOfTimer}
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
        <BtnOrange type="submit">Add to diary</BtnOrange>
      </WrapperPart2>
    </WrapperDiv>
  );
};

export default AddExerciseForm;
