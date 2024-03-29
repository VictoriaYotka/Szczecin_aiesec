import { useEffect, useState } from "react";
import css from "./Header.module.scss";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";
import { useLocation } from "react-router-dom";
import { toggleBodyScroll } from "../../../utils";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  const location = useLocation();

  const [isLargeScreen, setIsLargeScreen] = useState(
    document.body.offsetWidth >= 992
  );

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
    isOpenBurgerMenu ? toggleBodyScroll("visible") : toggleBodyScroll("clip");
  };

  const updateMedia = () => {
    setIsLargeScreen(document.body.offsetWidth >= 1280);
    if (isLargeScreen) {
      setIsOpenBurgerMenu(false);
      toggleBodyScroll("visible");
    }
  };

  const handlerClicks = (e) => {
    const backdrop =
      e.target.closest("#burger_menu") === null &&
      e.target.closest("#user_menu") === null &&
      e.target.closest("#navigation") === null &&
      e.type === "click";
    const target = e.key === "Escape";

    if (backdrop || target) {
      setIsOpenBurgerMenu(false);
      toggleBodyScroll("visible");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    if (isOpenBurgerMenu) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  });

  useEffect(() => {
    setIsOpenBurgerMenu(false);
  }, [location.pathname]);
  return (
    <header className={css.header}>
      {isLargeScreen && (
        <>
          <Navigation />
          <UserMenu />
        </>
      )}

      {!isLargeScreen && (
        <BurgerMenu
          toggleMenu={toggleMenu}
          isOpenBurgerMenu={isOpenBurgerMenu}
        />
      )}
    </header>
  );
};

export default Header;
