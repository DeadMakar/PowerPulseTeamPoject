import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${globalColor.colorWhite};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
  }
`;
