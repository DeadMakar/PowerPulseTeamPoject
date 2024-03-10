import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { IconSeting, IconUser, Img, UserWraper } from './UserBar.styled';

const UserBar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <IconSeting>
        <use href={`${sprite}#icon-settings-01`} />
      </IconSeting>
      <UserWraper>
        {user?.avatarURL ? (
          <>
            <Img src={user.avatarURL} alt="User Avatar" />
          </>
        ) : (
          <IconUser>
            <use href={`${sprite}#icon-gridicons_user`} />
          </IconUser>
        )}
      </UserWraper>
    </>
  );
};

export default UserBar;
