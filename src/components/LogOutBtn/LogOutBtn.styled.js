import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoutIcon = styled.svg`
  fill: transparent;
  stroke: rgba(239, 237, 232, 1);
  width: 20px;
  height: 20px;
`;
export const LogoutStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(239, 237, 232, 1);
  font-size: 16px;
`;
