import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./BurgerMenu.module.scss";
import icons from "../../../../assets/icons/icons.svg";

const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu }) => {
  return (
    <>
      <div onClick={toggleMenu} id="burger_menu">
        <svg className={css.icon}>
          {isOpenBurgerMenu ? (
            <use href={icons + "#close"}></use>
          ) : (
            <use href={icons + "#burger"}></use>
          )}
        </svg>
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
