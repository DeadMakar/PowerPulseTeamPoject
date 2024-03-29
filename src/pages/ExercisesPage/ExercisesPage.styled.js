import styled from 'styled-components';
import { globalColor } from '../../styles/root';
import bgDesktop1 from '../../assets/images/exercises/trainingGym-1.jpg';
import bgDesktop2 from '../../assets/images/exercises/trainingGym-1@2x.jpg';

export const NavigationExercises = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 78px;
    margin-bottom: 70px;
  }
`;

export const Block = styled.div`
  text-align: center;
`;

export const ExerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const MixContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`;

export const BackButton = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  gap: 8px;
  color: ${globalColor.colorInput};
  font-size: 14px;
  line-height: 1.29;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 30px;
    font-size: 16px;
    line-height: 1.5;
  }

  > svg {
    stroke: ${globalColor.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${globalColor.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${globalColor.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`;

export const BackGroundStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgDesktop1});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgDesktop2});
  }
`;
