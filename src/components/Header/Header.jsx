import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.Header}>
      <nav className={css.Navigation}>
        <NavLink className={css.NavLink} to="/">
          <p className={css.Paragraph}>Home</p>
        </NavLink>
        <ul className={css.List}>
          <li className={css.Item}>
            <NavLink className={css.NavLink} to="/registration">
              <p className={css.Paragraph}>Sign in</p>
            </NavLink>
          </li>
          <li className={css.Item}>
            <NavLink className={css.NavLink} to="/login">
              <p className={css.Paragraph}>Login</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={css.TitleContainer}>
        <h1 className={css.Title}>My Phonebook</h1>
      </div>
    </header>
  );
};
