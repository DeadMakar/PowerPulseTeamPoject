import sprite from '../../assets/sprite.svg';

import {
  DataValue,
  ExclamationSvg,
  ItemListStyled,
  ListStyled,
  SvgStyled,
  SvgWrapperText,
  TextStyled,
  TextWrapper,
  TitleStyled,
  TitleStyledWrapper,
  UserCardContainer,
  UserName,
  UserNameRole,
  UserRole,
} from './UserCard.styled';

const UserCard = () => {
  return (
    <UserCardContainer>
      {/* Avatar */}
      <div>
        <label htmlFor="user-avatar-image">
          <input type="file" accept="image/*" />
          <svg>
            <use />
          </svg>
        </label>
      </div>

      <UserNameRole>
        <UserName> User Name</UserName>
        <UserRole>User</UserRole>
      </UserNameRole>

      <ListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-fluent_food-24-filled`}></use>
            </SvgStyled>
            <TitleStyled>Daily calorie intake</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{0}</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-dumbbell'}></use>
            </SvgStyled>
            <TitleStyled>Daily physical activity</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>0 min</DataValue>
        </ItemListStyled>
      </ListStyled>
      <TextWrapper>
        <SvgWrapperText>
          <ExclamationSvg>
            <use href={sprite + '#icon-exclamation-mark'}></use>
          </ExclamationSvg>
        </SvgWrapperText>
        <TextStyled>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </TextStyled>
      </TextWrapper>
    </UserCardContainer>
  );
};

export default UserCard;
