import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/thunk.auth';
import css from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const unvalidUser = () => {
    dispatch(logoutThunk());
  };
  return (
    <header className={css.Header}>
      <nav className={css.Navigation}>
        <NavLink className={css.NavLink} to="/" end>
          <span className={css.Page}>Home</span>
        </NavLink>
        <NavLink className={css.NavLink} to="/contacts" end>
          <span className={css.Page}>Contacts</span>
        </NavLink>
        <ul className={css.List}>
          <li className={css.Item}>
            <NavLink className={css.NavLink} to="/registration">
              <span className={css.Auth}>Sign up</span>
            </NavLink>
          </li>
          <li className={css.Item}>
            <NavLink className={css.NavLink} to="/login">
              <span className={css.Login}>Login</span>
            </NavLink>
          </li>
        </ul>
        <button className={css.HeaderBtn} onClick={unvalidUser} type="button">
          Logout
        </button>
      </nav>
      <div className={css.TitleContainer}>
        <h1 className={css.Title}>My Phonebook</h1>
      </div>
    </header>
  );
};
