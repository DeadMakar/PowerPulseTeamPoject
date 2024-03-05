import styled from 'styled-components';

import bgDesktop1 from '../../assets/images/exercises/trainingGym-1.jpg';
import bgDesktop2 from '../../assets/images/exercises/trainingGym-1@2x.jpg';

export const ContainerExPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 78px;
    margin-bottom: 70px;
  }
`;

export const MixContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
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
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%), url(${bgDesktop1});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%), url(${bgDesktop2});
  }
`;
