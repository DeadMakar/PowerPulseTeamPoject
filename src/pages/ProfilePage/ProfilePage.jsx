// import { useEffect } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { UserCard } from '../../components/UserCard';
import { UserForm } from '../../components/UserForm/UserForm';
import { Container } from '../../styles/GlobalStyles';
import { ProfileContentBox } from './ProfilePage.styled';
// import { useDispatch, useSelector } from 'react-redux';

const ProfilePage = () => {
  // useEffect - відправляти запит для отримання інформації юзера,
  //  можна передавати обрахунки пропсами в компонент UserCard

  // const {bmr = 0 , time = 110} = useSelector

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getCurrentUserData);
  //   }, [dispatch]);

  return (
    <Container>
      <TitlePage contentText="Profile Settings" />
      <ProfileContentBox>
        <UserCard />

        <UserForm />
      </ProfileContentBox>
    </Container>
  );
};

export default ProfilePage;
