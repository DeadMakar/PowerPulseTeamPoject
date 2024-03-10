import sprite from '../../assets/sprite.svg';
import { IconWrapper, LogoBox, SecondIconWrapper } from './Logo.styled';

const Logo = ({ fill }) => {
  return (
    <LogoBox>
      <IconWrapper style={{ fill: fill }}>
        <use href={`${sprite}#icon-Vector`} />
      </IconWrapper>
      <SecondIconWrapper style={{ fill: fill }}>
        <use href={`${sprite}#icon-PowerPulse`} />
      </SecondIconWrapper>
    </LogoBox>
  );
};
export default Logo;
