import { useEffect, useState } from 'react';
import {
  ContainerWrap,
  ListStyled,
  ItemListStyled,
  TitleStyledWrapper,
  TitleStyled,
  ExclamationSvg,
  SvgStyled,
  SvgWrapperText,
  TextStyled,
  TextWrapper,
  DataValue,
} from './DayDashboard.styled';
import sprite from '../../assets/sprite.svg';
import { selectDiaryError } from '../../redux/diary/selectors';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { getAllDiaryInformation } from '../../redux/diary/operations';

const DayDashboard = (userDiaryInformation) => {
  const consumedCalories =
    userDiaryInformation?.userDiaryInformation[0]?.consumedCalories;
  const burnedCalories =
    userDiaryInformation?.userDiaryInformation[1]?.burnedCalories;
  const totalExerciseTime =
    userDiaryInformation?.userDiaryInformation[1]?.totalExerciseTime;
  const user = useSelector(selectUser);
  const resultBMR = user?.resultBMR;
  const [isOverThan, setIsOverThan] = useState(false);
  const [isTimeOver, setTimeOver] = useState(false);
  const error = useSelector(selectDiaryError);

  useEffect(() => {
    const shlapa = async () => {
      await getAllDiaryInformation();
    };
    shlapa();
  }, []);

  const remaining = resultBMR - consumedCalories;
  const restTime = 110 - totalExerciseTime;

  useEffect(() => {
    if (remaining < 0) {
      setIsOverThan(true);
    }
    if (restTime < 0) {
      setTimeOver(true);
    }
  }, [remaining, restTime]);

  return (
    <ContainerWrap>
      <ListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-fluent_food-24-filled'}></use>
            </SvgStyled>
            <TitleStyled>Daily calory intake</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{resultBMR || '2200'}</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-dumbbell'}></use>
            </SvgStyled>
            <TitleStyled>Daily norm of sports</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>110 min</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-fluent_food-apple-20-filled'}></use>
            </SvgStyled>
            <TitleStyled>Calories consumed</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{!error ? consumedCalories : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-calories-1'}></use>
            </SvgStyled>
            <TitleStyled>Calories burned</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{burnedCalories && !error ? burnedCalories : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled className={isOverThan ? 'redBg' : ''}>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-bubble'}></use>
            </SvgStyled>
            <TitleStyled>The rest of the calories</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{remaining || '0'}</DataValue>
        </ItemListStyled>
        <ItemListStyled className={isTimeOver ? 'greenBg' : ''}>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-running-figure'}></use>
            </SvgStyled>
            <TitleStyled>The rest of sports</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{restTime || '110'} min</DataValue>
        </ItemListStyled>
      </ListStyled>

      <TextWrapper>
        <SvgWrapperText>
          <ExclamationSvg>
            <use href={sprite + '#icon-exclamation-mark'}></use>
          </ExclamationSvg>
        </SvgWrapperText>
        <TextStyled>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </TextStyled>
      </TextWrapper>
    </ContainerWrap>
  );
};

export default DayDashboard;
