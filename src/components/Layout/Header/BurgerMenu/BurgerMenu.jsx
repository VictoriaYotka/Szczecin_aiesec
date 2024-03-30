import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./BurgerMenu.module.scss";
import icons from "../../../../assets/icons/icons.svg";
import Logo from "../Logo/Logo";

const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu }) => {
  return (
    <>
      <div id="burger_menu" className={css.wrapper}>
        <Logo />
        <button onClick={toggleMenu} className={css.button}>
          <svg className={css.icon}>
            {isOpenBurgerMenu ? (
              <use href={icons + "#close"}></use>
            ) : (
              <use href={icons + "#burger"}></use>
            )}
          </svg>
        </button>
      </div>

      {isOpenBurgerMenu && (
        <div className={css.burger_content}>
          <Navigation />
          <UserMenu />
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
