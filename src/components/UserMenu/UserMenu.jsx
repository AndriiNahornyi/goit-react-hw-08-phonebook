import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunk.auth';
import { selectUser } from 'redux/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutUser = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.UserContainer}>
      <p className={css.Paragraph}>{user?.email}</p>
      <div className={css.ContainerBtn}>
        <button className={css.LogoutBtn} onClick={logoutUser} type="button">
          Logout
        </button>
      </div>
    </div>
  );
};
