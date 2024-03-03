import { TitlePage } from '../../components/TitlePage';
import { UserCard } from '../../components/UserCard';
import { UserForm } from '../../components/UserForm/UserForm';
import { Container } from '../../styles/GlobalStyles';
import { ProfileContentBox } from './ProfilePage.styled';

const ProfilePage = () => {
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
