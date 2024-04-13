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
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { logInGoogle } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const WelcomePage = () => {
  const [params] = useSearchParams();
  const [email, setEmail] = useState(params.get('email') ?? '');
  const [token, setToken] = useState(params.get('accessToken') ?? '');

  // const query = params.get('accessToken') ?? '';
  // const email = params.get('email') ?? '';

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== '' && email !== '') {
      dispatch(logInGoogle({ token, email }));
    }
  }, [dispatch, token, email]);

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
              <GoogleLink href="https://powerpulseback.onrender.com/auth/google">
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
