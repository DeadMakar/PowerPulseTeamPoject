import {
  SpanStyled,
  TextStyled,
  BtnOrange,
  ImgStyled,
  ListStyled,
  ItemStyled,
  WrapperDiv,
  SpanStyled2,
  // CloseSvgBtn,
} from './AddExerciseForm.styled';
// import sprite from '../../assets/sprite.svg';

import dbExercises from '../../../DB/exercises.json';
const data = dbExercises[1];
const { name, target, bodyPart, equipment, gifUrl, _id } = dbExercises[1];
console.log('data', data);

export const AddExerciseForm = ({ caloriesBurned }) => {
  return (
    <WrapperDiv>
      <ImgStyled src={gifUrl} alt="Exercise gif-photo" />
      {/* таймер */} <h2>Timer</h2>
      <TextStyled>
        Burned calories:<SpanStyled> 150 {caloriesBurned}</SpanStyled>
      </TextStyled>
      {/* поля: Name, Target, Body Part, Equipment */}
      <ListStyled>
        <ItemStyled>
          Name <SpanStyled2> {name}</SpanStyled2>
        </ItemStyled>
        <ItemStyled>
          Target <SpanStyled2>{target}</SpanStyled2>
        </ItemStyled>
        <ItemStyled>
          Body Part <SpanStyled2> {bodyPart}</SpanStyled2>
        </ItemStyled>
        <ItemStyled>
          Equipment <SpanStyled2>{equipment}</SpanStyled2>
        </ItemStyled>
      </ListStyled>
      <BtnOrange type="submit">Add to diary</BtnOrange>
    </WrapperDiv>
  );
};

export default AddExerciseForm;
