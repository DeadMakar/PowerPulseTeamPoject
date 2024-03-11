import { useSelector } from 'react-redux';
import { TitlePage } from '../../components/TitlePage';
import { UserCard } from '../../components/UserCard';
import { UserForm } from '../../components/UserForm/UserForm';
import { Container } from '../../styles/GlobalStyles';
import { ProfileContainer, ProfileContentBox } from './ProfilePage.styled';
import { selectUser } from '../../redux/auth/selectors';

const ProfilePage = () => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <ProfileContainer>
        <TitlePage contentText="Profile Settings" />
        <ProfileContentBox>
          <UserCard user={user} />

          <UserForm user={user} />
        </ProfileContentBox>
      </ProfileContainer>
    </Container>
  );
};

export default ProfilePage;
