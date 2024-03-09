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
  TimerBlock,
  PlayTimerBtn,
  PauseTimerBtn,
  SvgStyled,
  ItemTextStyled,
  // CloseSvgBtn,
} from './AddExerciseForm.styled';
import sprite from '../../assets/sprite.svg';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import dbExercises from '../../../DB/exercises.json';
const data = dbExercises[1];
const { name, target, bodyPart, equipment, gifUrl, _id } = dbExercises[1];
console.log('data', data);

export const AddExerciseForm = ({ caloriesBurned }) => {
  return (
    <WrapperDiv>
      <WrapperPart1>
        <ImgStyled src={gifUrl} alt="Exercise gif-photo" />
        <TimeTextStyled>Time</TimeTextStyled>
        <TimerBlock>
          <CountdownCircleTimer
            isPlaying
            // isGrowing
            duration={15}
            // colorsTime={[7, 5, 2, 0]}
            size={124}
            strokeWidth={5}
            colors={[['#303030']]}
            trailColor={[['#E6533C']]}
          >
            {({ elapsedTime }) => elapsedTime}
          </CountdownCircleTimer>
        </TimerBlock>
        <PlayTimerBtn>
          <SvgStyled>
            <use href={`${sprite}#icon-play`}></use>
          </SvgStyled>
        </PlayTimerBtn>
        {/* <PauseTimerBtn>
          <SvgStyled>
            <use href={`${sprite}#icon-pause-square`}></use>
          </SvgStyled>
        </PauseTimerBtn> */}
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
