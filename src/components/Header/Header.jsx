import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.headerNav}>
        <ul className={css.headerList}>
          <li>
            <NavLink className={css.headerLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.headerLink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
