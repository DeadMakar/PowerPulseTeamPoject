import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExercisesCategories = styled.ul`
  display: flex;
  margin-top: 20px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const CategoryLink = styled(Link)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${(props) => (props.isactive === 'true' ? '#EFEDE8' : '')};
  position: relative;

  &:after {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: ${(props) => (props.isactive === 'true' ? '4px' : '0')};
    background-color: #ef8964;
    border-radius: 2px;
    content: '';
    transition: height 0.3s;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
