import { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';

import {
  AvatarBox,
  AvatarImg,
  DataValue,
  ExclamationSvg,
  InputAvatar,
  ItemListStyled,
  LabelAvatar,
  ListStyled,
  LogOutBox,
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
import { LogOutBtn } from '../LogOutBtn';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from '../../redux/profile/operations';
// import { useDispatch } from 'react-redux';
import defaultAvatar from '../../assets/images/profile/gridicons_user.jpg';
import { selectUser } from '../../redux/auth/selectors';

const UserCard = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(user.avatar ?? defaultAvatar);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageUrl(fileReader.result);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      fileReader.readAsDataURL(selectedImage);

      dispatch(updateAvatar(selectedImage));

      console.log(123);
    }
  }, [selectedImage]);

  return (
    <UserCardContainer>
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
        <UserName> {user.name}</UserName>
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
          <DataValue>{user.bmr ?? '0'}</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-dumbbell'}></use>
            </SvgStyled>
            <TitleStyled>Daily physical activity</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{user.trainingTime ?? '110'} min</DataValue>
        </ItemListStyled>
      </ListStyled>
      <div>
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
        <LogOutBox>
          <LogOutBtn colorSvg="#E6533C" />
        </LogOutBox>
      </div>
    </UserCardContainer>
  );
};

export default UserCard;
