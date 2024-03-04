import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LogoutIcon } from '../LogOutBtn/LogOutBtn.styled';

export const HeaderContainer = styled.div`
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  @media (max-width: 374px) {
    padding: 12px 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    padding: 19px 26px;
  }

  @media (min-width: 1440px) {
    padding: 20px 96px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SecondNavWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const NavWraper = styled.div`
  display: flex;
  gap: 16px;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 27px;
  color: rgba(239, 237, 232, 1);
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #e6533c;
  }
  &.active {
    background-color: #e6533c;
  }
`;

export const NavigationLinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(239, 237, 232, 1);
  background-color: transparent;
  border-radius: 12px;
`;

export const LogoutIconHeder = styled(LogoutIcon)`
  stroke: #e6533c;
`;
