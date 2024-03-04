import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { globalColor } from '../../styles/root';

export const SpanText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${globalColor.colorWhite};
`;

export const LogoutIcon = styled.svg`
  fill: transparent;
  stroke: rgba(239, 237, 232, 1);
  width: 20px;
  height: 20px;
  @media (min-width: 1440px) {
    stroke: ${globalColor.colorOrange};
  }
`;
export const LogoutStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(239, 237, 232, 1);
  font-size: 16px;
`;
