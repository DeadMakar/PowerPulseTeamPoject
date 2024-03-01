import {
  DivContainer,
  VideoWrapper,
  TextWrapper,
  VideoNumber,
  VideoText,
  WrapperSvg,
  WrapperTextSvg,
  TextNumber,
  WrapperDescription,
  TextDescription,
  Svg,
  SvgPlay,
} from './StatisticsInfo.styled';
import sprite from '../../assets/sprite.svg';

export const StatisticsInfo = ({ isWelcomePage }) => {
  return (
    <DivContainer isWelcomePage={isWelcomePage}>
      <VideoWrapper>
        <WrapperSvg>
          <SvgPlay>
            <use href={`${sprite}#icon-play`}></use>
          </SvgPlay>
        </WrapperSvg>
        <div>
          <VideoNumber>+</VideoNumber>
          <VideoText>Video tutorial</VideoText>
        </div>
      </VideoWrapper>
      <TextWrapper>
        <WrapperTextSvg>
          <Svg>
            <use
              href={`${sprite}#icon-running-stick-figure-svgrepo-com-1`}
            ></use>
          </Svg>
        </WrapperTextSvg>
        <WrapperDescription>
          <TextNumber></TextNumber>
          <TextDescription>cal</TextDescription>
        </WrapperDescription>
      </TextWrapper>
    </DivContainer>
  );
};

export default StatisticsInfo;
