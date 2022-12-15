import { useContext } from "react";

import styles from "./Header.module.css";

import Logo from "./Logo";
import Navigation from "./Navigation/MainNav";
import ActionButton from "../ActionButton";

import ScrollContext from "../../store/scroll-context";

const Header = (props) => {
  const scrollCtx = useContext(ScrollContext);
  const classes = scrollCtx.offset > 50 ? styles["header_scrolled"] : "";

  return (
    <header className={classes}>
      <Logo />
      <Navigation className={styles["nav-main"]} />
      <ActionButton>Book Now</ActionButton>
    </header>
  );
};

export default Header;
