import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const LinkClass = ({ isActive }) => {
    return isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink;
  };

  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={LinkClass}>
        Registration
      </NavLink>
      <NavLink to="/login" className={LinkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
