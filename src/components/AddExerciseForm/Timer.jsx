import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import sprite from '../../assets/sprite.svg';
import {
  PauseTimerBtn,
  PlayTimerBtn,
  SvgStyled,
} from './AddExerciseForm.styled';

export const TimerComponent = ({
  fullExerciseTime,
  setTimeOfTimer,
  timeOfTimer,
  burnedCalories,
  setReallyBurnedCalories,
}) => {
  // в пропсах есть timeOfTimer, а тут нет
  const [isPlaying, setIsPlaying] = useState(false);

  const onTimerBtnToogle = (currentTime) => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      setTimeOfTimer(currentTime);
    }
  };

  const timeFormat = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const timeDifference = timeOfTimer - fullExerciseTime * 60;

    const reallyCalories =
      (timeOfTimer / (fullExerciseTime * 60)) * burnedCalories;

    setReallyBurnedCalories(reallyCalories.toFixed(0));

    if (timeDifference === 0) {
      setTimeOfTimer(timeOfTimer);
      setReallyBurnedCalories(burnedCalories);
    }
  }, [
    burnedCalories,
    fullExerciseTime,
    setReallyBurnedCalories,
    setTimeOfTimer,
    timeOfTimer,
  ]);

  let currentTime = 0;

  return (
    <>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={fullExerciseTime * 60}
        size={124}
        colors="#E6533C"
        rotation="clockwise"
        strokeWidth={4}
        trailStrokeWidth={5}
        // strokeLinecap
        strokeLinecap="round"
        // trailColor
        // onUpdate
        onComplete={() => ({
          shouldRepeat: false,
          // delay: 1,
        })}
      >
        {({ remainingTime }) => {
          let timeOfTimer = fullExerciseTime * 60 - remainingTime;

          currentTime = timeOfTimer;

          const timeDifference = currentTime - fullExerciseTime * 60;

          //   if (timeDifference < 0) {
          //     return timeFormat(timeOfTimer);
          //   }
          //   realBurnedCalories = burnedCalories;
          //   onTimerBtnToogle(currentTime);
          //   return 'Exercise done!';

          if (timeDifference === 0) {
            // onTimerBtnToogle(fullExerciseTime * 60);
            // setReallyBurnedCalories(burnedCalories);
            return 'Exercise done!';
          }

          return timeFormat(timeOfTimer);
        }}
      </CountdownCircleTimer>
      {isPlaying ? (
        <PauseTimerBtn
          type="button"
          onClick={() => onTimerBtnToogle(currentTime)}
        >
          <SvgStyled>
            <use href={`${sprite}#icon-pause-square`}></use>
          </SvgStyled>
        </PauseTimerBtn>
      ) : (
        <PlayTimerBtn
          type="button"
          onClick={() => onTimerBtnToogle(currentTime)}
        >
          <SvgStyled>
            <use href={`${sprite}#icon-play`}></use>
          </SvgStyled>
        </PlayTimerBtn>
      )}
    </>
  );
};
