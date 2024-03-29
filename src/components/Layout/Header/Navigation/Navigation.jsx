import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav id="#navigation">
      <ul className={css.list}>
        <li>
          <NavLink to="/">Szczecin HOME</NavLink>
        </li>
        <li>
          <NavLink to="#">LC structure</NavLink>
        </li>
        <li>
          <NavLink to="#">AIESEC history</NavLink>
        </li>
        <li>
          <NavLink to="#">Culture of LC</NavLink>
        </li>
        <li>
          <NavLink to="#">Tea with EB podcast</NavLink>
        </li>
        <li>
          <NavLink to="#">Knowledge hub</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
