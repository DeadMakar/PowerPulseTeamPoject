import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarBox = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  background-color: rgba(48, 48, 48, 0.3);
  border-radius: 100%;

  stroke-width: 1px;

  border: 1px solid ${globalColor.colorOrange};

  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid ${globalColor.colorBeige};
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const InputAvatar = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;

  cursor: pointer;
`;

export const LabelAvatar = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const SvgAddAvatar = styled.svg`
  width: 24px;
  height: 24px;
  bottom: 0;
  right: 50%;
  z-index: 5;

  transition: stroke 0.3s ease;

  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${globalColor.colorBeige};
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const AvatarImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100%;
  object-fit: cover;
`;

export const UserNameRole = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 8px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const UserRole = styled.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.5);
`;

export const ListStyled = styled.ul`
  margin: 36px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin: 32px 0;
    gap: 16px;
    justify-content: center;
  }
`;

export const ItemListStyled = styled.li`
  width: 157px;
  height: 96px;
  padding: 14px;
  background-color: ${globalColor.colorOrange};
  border-radius: 12px;
  border: 1px solid #efede833;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 374px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 18px;
  }
`;

export const TitleStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TitleStyled = styled.h2`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 1.5;
  }
`;

export const DataValue = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const SvgWrapperText = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${globalColor.colorBeige};
  border-radius: 50%;
`;

export const SvgStyled = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${globalColor.colorOrange1};
`;

export const ExclamationSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const TextStyled = styled.p`
  font-size: 14px;
  line-height: 18px;

  color: ${globalColor.colorInput};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`;

export const LogOutBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 57px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;
