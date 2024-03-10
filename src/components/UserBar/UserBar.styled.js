import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const IconSeting = styled.svg`
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  fill: ${(props) => props.color || 'none'};
  stroke: ${(props) => props.color || 'rgba(239, 237, 232, 0.3)'};
  display: block;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${globalColor.colorOrange};
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => props.size || '28px'};
    height: ${(props) => props.size || '28px'};
  }
`;
export const UserWraper = styled.div`
  border: 1px solid ${globalColor.colorOrange};
  border-radius: 50%;
  width: 37px;
  height: 37px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
export const IconUser = styled.svg`
  width: ${(props) => props.size || '28px'};
  height: ${(props) => props.size || '28px'};
  fill: ${(props) => props.color || 'rgba(239, 237, 232, 0.1)'};
  display: block;
  transition: fill 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;
`;
export const Img = styled.img`
  border-radius: 50%;

  width: 21px;
  height: 21px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
