import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"></NavLink>
        <ul>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login">Authorization</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
