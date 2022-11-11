import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import css from './Header.module.css';

export const Header = () => {
  const token = useSelector(selectToken);
  return (
    <header className={css.Header}>
      <nav className={css.Navigation}>
        <NavLink
          className={({ isActive }) =>
            `${css.NavLink}  ${isActive ? css.Page : css.DeActive}`
          }
          to="/"
          end
        >
          Home
        </NavLink>
        {token && (
          <NavLink
            className={({ isActive }) =>
              `${css.NavLink}  ${isActive ? css.Page : css.DeActive}`
            }
            to="/contacts"
            end
          >
            Contacts
          </NavLink>
        )}
        {!token && (
          <ul className={css.List}>
            <li className={css.Item}>
              <NavLink
                className={({ isActive }) =>
                  `${css.NavLink}  ${isActive ? css.Page : css.DeActive}`
                }
                to="/registration"
              >
                Sign up
              </NavLink>
            </li>
            <li className={css.Item}>
              <NavLink
                className={({ isActive }) =>
                  `${css.NavLink}  ${isActive ? css.Page : css.DeActive}`
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
        {token && <UserMenu />}
      </nav>
      <div className={css.TitleContainer}>
        <h1 className={css.Title}>My Phonebook</h1>
      </div>
    </header>
  );
};
