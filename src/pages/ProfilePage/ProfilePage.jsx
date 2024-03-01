import { TitlePage } from '../../components/TitlePage';
import { UserForm } from '../../components/UserForm/UserForm';

const ProfilePage = () => {
  return (
    <div>
      <TitlePage contentText="Profile Settings" />
      <UserForm />
    </div>
  );
};

export default ProfilePage;
