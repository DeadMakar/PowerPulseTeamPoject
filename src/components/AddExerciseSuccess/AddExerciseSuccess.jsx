import thumbUp from '../../assets/images/exercises/thumbUp.png';
import {
  ImgStyled,
  // LinkBtnStyled,
  LinkStyled,
  OrangeBtnStyled,
  SpanStyled,
  SvgArrow,
  TextStyled,
  TextWrapper,
  TitleStyled,
  WrapperDiv,
} from './AddExerciseSuccess.styled';
import sprite from '../../assets/sprite.svg';

const AddExerciseSuccess = ({
  timeOfTimer: exerciseTime,
  reallyBurnedCalories: caloriesBurned,
  closeModalAddExerciseSuccess: closeModalForm,
}) => {
  const exerciseFormattedTime = ` ${Math.floor(
    exerciseTime / 60
  )} min ${Math.round(exerciseTime % 60)} sec`;

  return (
    <WrapperDiv>
      <ImgStyled src={thumbUp} />
      <TitleStyled>Well done</TitleStyled>
      <TextWrapper>
        <TextStyled>
          Your time:
          <SpanStyled>{exerciseFormattedTime}</SpanStyled>
        </TextStyled>
        <TextStyled>
          Burned calories: <SpanStyled> {caloriesBurned} </SpanStyled>
        </TextStyled>
      </TextWrapper>
      <OrangeBtnStyled type="button" onClick={() => closeModalForm()}>
        Next exercise
      </OrangeBtnStyled>
      <LinkStyled href="/PowerPulseTeamPoject/diary">
        to the Diary
        <SvgArrow>
          <use href={`${sprite}#icon-arrow`}></use>
        </SvgArrow>
      </LinkStyled>
    </WrapperDiv>
  );
};

export default AddExerciseSuccess;
