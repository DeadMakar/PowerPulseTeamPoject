import {
  BgWrapper,
  HeroContainer,
  HeroSignInLink,
  HeroSignUpLink,
  HeroSvg,
  HeroTitle,
  HeroWrapper,
  LinkWrapper,
} from './WelcomePage.styled';
import sprite from '../../assets/sprite.svg';
import { StatisticsInfo } from '../../components/StatisticsInfo/StatisticsInfo';
import { Logo } from '../../components/Logo/';
import { Container } from '../../styles/GlobalStyles';
import { StyleSheetManager } from 'styled-components';

const WelcomePage = () => {
  return (
    <StyleSheetManager>
      <Container>
        <HeroContainer>
          <HeroWrapper>
            <Logo />
            <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
            <HeroSvg>
              <use href={`${sprite}#icon-line`}></use>
            </HeroSvg>
            <LinkWrapper>
              <HeroSignUpLink to={'/signup'}>Sign Up</HeroSignUpLink>
              <HeroSignInLink to={'/signin'}>Sign In</HeroSignInLink>
            </LinkWrapper>
          </HeroWrapper>
          <BgWrapper>{<StatisticsInfo />}</BgWrapper>
        </HeroContainer>
      </Container>
    </StyleSheetManager>
  );
};

export default WelcomePage;
