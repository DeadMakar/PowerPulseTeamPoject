import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 206px;
  transform: scale(0.98);
  opacity: 0.8;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:hover {
    transform: scale(1);
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 224px;
  }

  @media (min-width: 1440px) {
    width: 237px;
  }
`;

export const SubCategoryName = styled.h2`
  color: ${globalColor.colorWhite};
  font-size: 20px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const CategoryTitle = styled.span`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`;
