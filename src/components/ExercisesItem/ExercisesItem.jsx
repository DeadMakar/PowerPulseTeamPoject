import {
  DietSpan,
  SvgWrapper,
  Text,
  TextCategory,
  Title,
  Button,
  WrapperTitle,
  WrapperText,
} from '../ProductsItem/ProductsItem.styled';

import { globalColor } from '../../styles/root';

import sprite from '../../assets/sprite.svg';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddExerciseSuccess } from '../AddExerciseSuccess';
import { BasicModalWindow } from '../BasicModalWindow';
import { AddExerciseForm } from '../AddExerciseForm';

export const ExercisesItem = ({
  exercise: {
    burnedCalories,
    name,
    bodyPart,
    target,
    gifUrl,
    time,
    _id,
    equipment,
  },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [exesiceWasAdded, setExersiceWasAdded] = useState(false);

  const [reallyBurnedCalories, setReallyBurnedCalories] = useState(0);
  const [timeOfTimer, setTimeOfTimer] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <>
        <DietSpan>WORKOUT</DietSpan>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignSelf: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          ></div>
          <Button onClick={() => handleOpenModal()}>
            Start
            <SvgWrapper
              style={{
                width: '16px',
                height: '16px',
              }}
            >
              <use
                href={sprite + '#icon-arrow'}
                style={{
                  stroke: globalColor.colorOrange,
                }}
              />
            </SvgWrapper>
          </Button>
        </div>

        <WrapperTitle>
          <svg style={{ flexShrink: 0, width: '24px', height: '24px' }}>
            <use href={sprite + '#icon-running-stick-figure-svgrepo-com-1'} />
          </svg>

          <Title>{name}</Title>
        </WrapperTitle>

        <WrapperText>
          <Text>
            <span>Burned calories:</span>
            {burnedCalories}
          </Text>
          <TextCategory>
            <span>Body part:</span>
            {bodyPart}
          </TextCategory>
          <Text>
            <span>Target:</span>
            {target}
          </Text>
        </WrapperText>
      </>
      {isModalOpen && (
        <BasicModalWindow
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        >
          {!exesiceWasAdded ? (
            <AddExerciseForm
              setReallyBurnedCalories={setReallyBurnedCalories}
              closeModalAddExersiceForm={handleCloseModal}
              name={name}
              target={target}
              bodyPart={bodyPart}
              equipment={equipment}
              id={_id}
              gifUrl={gifUrl}
              fullExerciseTime={time}
              burnedCalories={burnedCalories}
              reallyBurnedCalories={reallyBurnedCalories}
              setTimeOfTimer={setTimeOfTimer}
              timeOfTimer={timeOfTimer}
              onClick={handleOpenModal}
              setExersiceWasAdded={setExersiceWasAdded}
            />
          ) : (
            <AddExerciseSuccess
              timeOfTimer={timeOfTimer}
              reallyBurnedCalories={reallyBurnedCalories}
              closeModalAddProductSuccess={handleCloseModal}
            />
          )}
        </BasicModalWindow>
      )}
    </>
  );
};

export default ExercisesItem;
