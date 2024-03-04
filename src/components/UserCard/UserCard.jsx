import { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import defaultAvatar from '../../assets/images/profile/gridicons_user.jpg';

import {
  AvatarBox,
  AvatarImg,
  DataValue,
  ExclamationSvg,
  InputAvatar,
  ItemListStyled,
  LabelAvatar,
  ListStyled,
  SvgAddAvatar,
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
// import { useDispatch } from 'react-redux';

const UserCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(defaultAvatar);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  // const dispatch = useDispatch();

  // const [selectedImage, setSelectedImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);

  // useEffect(() => {
  //   if (selectedImage) {
  //     dispatch(updateAvatar(URL.createObjectURL(selectedImage)));
  //   }
  // }, [selectedImage]);

  return (
    <UserCardContainer>
      {/* Avatar */}
      <AvatarBox>
        <InputAvatar
          id="image-file"
          type="file"
          accept="image/*"
          src={imageUrl}
          alt="User avatar image"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />

        <LabelAvatar htmlFor="image-file">
          <SvgAddAvatar>
            <use href={`${sprite}#icon-check-mark-1`} />
          </SvgAddAvatar>
        </LabelAvatar>
        <AvatarImg src={imageUrl} alt="User avatar image" />
      </AvatarBox>

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

      {/* BUTTON */}
    </UserCardContainer>
  );
};

export default UserCard;
