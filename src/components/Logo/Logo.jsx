import sprite from '../../assets/sprite.svg';
import { IconWrapper, LogoBox, SecondIconWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoBox>
      <IconWrapper>
        <use href={`${sprite}#icon-Vector`} />
      </IconWrapper>
      <SecondIconWrapper>
        <use href={`${sprite}#icon-PowerPulse`} />
      </SecondIconWrapper>
    </LogoBox>
  );
};

export default Logo;
