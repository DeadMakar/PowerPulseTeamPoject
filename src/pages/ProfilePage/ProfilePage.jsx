// import { useEffect } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { UserCard } from '../../components/UserCard';
import { UserForm } from '../../components/UserForm/UserForm';
import { Container } from '../../styles/GlobalStyles';
import { ProfileContentBox } from './ProfilePage.styled';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from '../../redux/auth/operations';

const ProfilePage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, []);

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
