import thumbUp from '../../assets/images/exercises/thumbUp.png';
import {
  ImgStyled,
  LinkBtnStyled,
  LinkStyled,
  SpanStyled,
  SvgArrow,
  TextStyled,
  TextWrapper,
  TitleStyled,
  WrapperDiv,
} from './AddExerciseSuccess.styled';
import sprite from '../../assets/sprite.svg';

const AddExerciseSuccess = ({ exerciseTime, caloriesBurned }) => {
  return (
    <WrapperDiv>
      <ImgStyled src={thumbUp} />
      <TitleStyled>Well done</TitleStyled>
      <TextWrapper>
        <TextStyled>
          Your time: <SpanStyled>3 {exerciseTime} minutes</SpanStyled>
        </TextStyled>
        <TextStyled>
          Burned calories: <SpanStyled> 150 {caloriesBurned} </SpanStyled>
        </TextStyled>
      </TextWrapper>
      <LinkBtnStyled href="">Next exercise</LinkBtnStyled>{' '}
      <LinkStyled href="">
        to the Diary
        <SvgArrow>
          <use href={`${sprite}#icon-arrow`}></use>
        </SvgArrow>
      </LinkStyled>
    </WrapperDiv>
  );
};

export default AddExerciseSuccess;
