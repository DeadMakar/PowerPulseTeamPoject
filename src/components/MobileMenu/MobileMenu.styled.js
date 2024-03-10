import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LogoutStyled } from '../LogOutBtn/LogOutBtn.styled';
import { globalColor } from '../../styles/root';

export const BackdropMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
`;

export const MenuContainer = styled.div`
  z-index: 1001;
  position: relative;
  right: 0;
  margin-left: auto;
  height: 100vh;
  background-color: ${globalColor.colorOrange};
  padding: 26px 32px 32px 32px;

  @media (max-width: 374px) {
    max-width: 200px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 200px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 350px;
  }
`;

export const IconClose = styled.svg`
  stroke-width: 2px;
  width: 32px;
  height: 32px;
  fill: ${globalColor.colorWhite};
`;

export const CloseBtn = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  stroke: white;
  top: 26px;
  right: 32px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translateY(100%);
`;

export const BurgerNav = styled(NavLink)`
  color: ${globalColor.colorWhite};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  font-size: 16px;

  &.active {
    border-color: ${globalColor.colorWhite};
  }
`;

export const LogOutStyled = styled(LogoutStyled)`
  position: absolute;
  bottom: 32px;
  left: 32px;
`;
export const SpanText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${globalColor.colorWhite};
`;
