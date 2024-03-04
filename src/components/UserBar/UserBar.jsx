import sprite from '../../assets/sprite.svg';
import { IconSeting, IconUser, UserWraper } from './UserBar.styled';

export const UserBar = () => {
  return (
    <>
      <IconSeting>
        <use href={`${sprite}#icon-settings-01`} />
      </IconSeting>
      <UserWraper>
        <IconUser>
          <use href={`${sprite}#icon-gridicons_user`} />
        </IconUser>
      </UserWraper>
    </>
  );
};
export default UserBar;
