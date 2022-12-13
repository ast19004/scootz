import styles from "./Header.module.css";

import Logo from "./Logo";
import Navigation from "./Navigation/MainNav";
import ActionButton from "../ActionButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation className={styles["nav-main"]} />
      <ActionButton>Book Now</ActionButton>
    </header>
  );
};

export default Header;
