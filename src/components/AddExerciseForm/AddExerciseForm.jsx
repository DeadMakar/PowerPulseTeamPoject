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
  PlayTimerBtn,
  PauseTimerBtn,
  SvgStyled,
  ItemTextStyled,
} from './AddExerciseForm.styled';
import sprite from '../../assets/sprite.svg';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import dbExercises from '../../../DB/exercises.json';
import { useState } from 'react';

const data = dbExercises[1];
const { name, target, bodyPart, equipment, gifUrl, _id } = dbExercises[1];
// console.log('data', data);

export const AddExerciseForm = ({ caloriesBurned }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfTimer, setTimeOfTimer] = useState(0);

  const TimerComponent = () => (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={60}
      size={124}
      colors="#E6533C"
      rotation="clockwise"
      strokeWidth={4}
      trailStrokeWidth={5}
      // strokeLinecap
      strokeLinecap="round"
      // isGrowing
      // trailColor
      // children
      // onUpdate
      onComplete={() => ({
        shouldRepeat: false,
        // delay: 1,
      })}

      // onComplete={() => {
      //   // do your stuff here
      //   return { shouldRepeat: true, delay: 1.5 }; // repeat animation in 1.5 seconds
      // }}
    >
      {({ remainingTime }) => {
        const timeOfTimer = 60 - remainingTime;
        // setTimeOfTimer(timeOfTimer);
        return timeOfTimer;
      }}
      {/* {({ elapsedTime }) => elapsedTime} */}
    </CountdownCircleTimer>
  );

  const onTimerBtnToogle = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
    }
  };

  const PlayBtn = (
    <PlayTimerBtn type="button" onClick={onTimerBtnToogle}>
      <SvgStyled>
        <use href={`${sprite}#icon-play`}></use>
      </SvgStyled>
    </PlayTimerBtn>
  );

  const PauseBtn = (
    <PauseTimerBtn type="button" onClick={onTimerBtnToogle}>
      <SvgStyled>
        <use href={`${sprite}#icon-pause-square`}></use>
      </SvgStyled>
    </PauseTimerBtn>
  );

  return (
    <WrapperDiv>
      <WrapperPart1>
        <ImgStyled src={gifUrl} alt="Exercise gif-photo" />
        <TimeTextStyled>Time</TimeTextStyled>
        {/* <TimerBlock /> */}
        <TimerComponent />
        {isPlaying ? PauseBtn : PlayBtn}
        <TextStyled>
          Burned calories:<SpanStyled> 150 {caloriesBurned}</SpanStyled>
        </TextStyled>
        {/* поля: Name, Target, Body Part, Equipment */}
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
