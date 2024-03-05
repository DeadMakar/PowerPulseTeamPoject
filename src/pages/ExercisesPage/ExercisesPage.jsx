import React from 'react';
import { ExercisesCategories } from '../../components/ExercisesCategories';
import { TitlePage } from '../../components/TitlePage';
import { Container } from '../../../styles/GlobalStyles';
import {
  ContainerExPage,
  BackGroundStyle,
  MixContainer,
  BackButton 
} from './ExercisesPage.styled';

const ExercisesPage = () => {
  return (
    <BackGroundStyle>
      <Container>
        <MixContainer>
          <div>
            <BackButton />
            <ContainerExPage>
              <TitlePage contentText="halo" />
              <ExercisesCategories />
            </ContainerExPage>
          </div>
        </MixContainer>
      </Container>
    </BackGroundStyle>
  );
};

export default ExercisesPage;
