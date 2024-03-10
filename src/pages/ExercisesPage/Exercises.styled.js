import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const ChaptersWrapper = styled.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
  }
`;

export const DesctopWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const LinkStyled = styled(NavLink)`
  position: relative;
  display: block;
  color: ${globalColor.colorInput};

  &.active {
    color: ${globalColor.colorWhite};

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: ${globalColor.colorOrange};
      border-radius: 2px;
    }
  }
`;
