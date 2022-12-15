import { useEffect, useState } from "react";

import styles from "./Header.module.css";

import Logo from "./Logo";
import Navigation from "./Navigation/MainNav";
import ActionButton from "../ActionButton";

const Header = (props) => {
  const [offset, setOffset] = useState(0);

  const classes = offset > 1 ? styles["header_scrolled"] : "";
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <header className={classes}>
      <Logo />
      <Navigation className={styles["nav-main"]} />
      <ActionButton>Book Now</ActionButton>
    </header>
  );
};

export default Header;
