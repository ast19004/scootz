import { useContext } from "react";

import styles from "./Header.module.css";

import Logo from "./Logo";
import Navigation from "./Navigation/MainNav";
import MobileNavigation from "./Navigation/HamburgerMenu";

import ScrollContext from "../../store/scroll-context";

const Header = (props) => {
  const scrollCtx = useContext(ScrollContext);
  const headerClasses = scrollCtx.offsetY > 50 ? styles["header_scrolled"] : "";
  const navClasses = styles["nav-main"];

  return (
    <header className={headerClasses}>
      <Logo />
      <MobileNavigation className="SM" />
      <Navigation className={`MD-flex ${navClasses}`} />
    </header>
  );
};

export default Header;
