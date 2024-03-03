import { TitlePage } from '../../components/TitlePage';
import { UserCard } from '../../components/UserCard';
import { UserForm } from '../../components/UserForm/UserForm';
import { Container } from '../../styles/GlobalStyles';
import { PrifileContentBox } from './ProfilePage.styled';

const ProfilePage = () => {
  return (
    <Container>
      <TitlePage contentText="Profile Settings" />
      <PrifileContentBox>
        <UserCard />

        <UserForm />
      </PrifileContentBox>
    </Container>
  );
};

export default ProfilePage;
