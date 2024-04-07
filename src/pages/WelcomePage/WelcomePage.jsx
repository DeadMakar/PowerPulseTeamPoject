import {
  BgWrapper,
  GoogleLink,
  HeroContainer,
  HeroSignInLink,
  HeroSignUpLink,
  HeroSvg,
  HeroTitle,
  HeroWrapper,
  LinkWrapper,
} from './WelcomePage.styled';
import sprite from '../../assets/sprite.svg';
import { StatisticsInfo } from '../../components/StatisticsInfo';
import { Logo } from '../../components/Logo/';
import { Container } from '../../styles/GlobalStyles';
import { StyleSheetManager } from 'styled-components';

const WelcomePage = () => {
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    // Додайте код для автентифікації через Google тут
    console.log('Sign in with Google clicked!');
  };

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
              <GoogleLink href="#" onClick={handleGoogleLogin}>
                <svg>
                  <use href={`${sprite}#icon-google`}></use>
                </svg>
                Sign In
              </GoogleLink>
            </LinkWrapper>
          </HeroWrapper>
          <BgWrapper>{<StatisticsInfo />}</BgWrapper>
        </HeroContainer>
      </Container>
    </StyleSheetManager>
  );
};

export default WelcomePage;
