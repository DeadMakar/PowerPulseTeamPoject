import { DaySwitch } from '../../components/DaySwitch';
import { DayDashboard } from '../../components/DayDashboard';
import { Logo } from '../../components/Logo';
import {
  DiaryConteiner,
  InfoContainer,
  ProdAndExercise,
  TitleAndSwitch,
} from './DiaryPage.styled';
import { Container } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import { TitlePage } from '../../components/TitlePage';

const DiaryPage = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <DiaryConteiner>
        <TitleAndSwitch>
          <TitlePage contentText="Diary" />
          <DaySwitch />
        </TitleAndSwitch>

        <InfoContainer>
          <DayDashboard />
          <ProdAndExercise></ProdAndExercise>
        </InfoContainer>
      </DiaryConteiner>
    </Container>
  );
};

export default DiaryPage;
