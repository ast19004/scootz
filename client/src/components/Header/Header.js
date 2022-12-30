import { useContext } from "react";

import styles from "./Header.module.css";

import Logo from "./Logo";
import Navigation from "./Navigation/HamburgerMenu";

import ScrollContext from "../../store/scroll-context";

const Header = (props) => {
  const scrollCtx = useContext(ScrollContext);
  const classes = scrollCtx.offsetY > 50 ? styles["header_scrolled"] : "";

  return (
    <header className={classes}>
      <Logo />
      <Navigation className={styles["nav-main"]} />
    </header>
  );
};

export default Header;
