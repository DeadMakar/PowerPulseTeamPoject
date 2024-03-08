import { useDispatch } from 'react-redux';
import { TitlePage } from '../../components/TitlePage';
import { UserCard } from '../../components/UserCard';
import { UserForm } from '../../components/UserForm/UserForm';
import { Container } from '../../styles/GlobalStyles';
import { ProfileContainer, ProfileContentBox } from './ProfilePage.styled';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <ProfileContainer>
        <TitlePage contentText="Profile Settings" />
        <ProfileContentBox>
          <UserCard />

          <UserForm />
        </ProfileContentBox>
      </ProfileContainer>
    </Container>
  );
};

export default ProfilePage;
