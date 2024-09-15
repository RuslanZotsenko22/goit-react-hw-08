import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectiors";
import { logout } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.user}>
      <p className={css.user_par}>Welcome, {user.name} 👋</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={css.button_user}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
