import { useContext, useState } from "react";

import styles from "./Header.module.css";

import Logo from "./Logo";
import Navigation from "./Navigation/MainNav";
import MobileNavigation from "./Navigation/HamburgerMenu";

import ScrollContext from "../../store/scroll-context";

const Header = (props) => {
  const scrollCtx = useContext(ScrollContext);
  const [isMenuOpen, setIsMenuOpen] = useState("");

  const headerClasses = scrollCtx.offsetY > 50 ? styles["header_scrolled"] : "";
  const navClasses = styles["nav-main"];

  const handleMenuOpen = (userMenuOpen) => {
    setIsMenuOpen(userMenuOpen);
  };
  return (
    <header className={headerClasses}>
      <Logo className={isMenuOpen ? "fadeOut" : ""} />
      <MobileNavigation className="SM" isMenuOpen={handleMenuOpen} />
      <Navigation className={`MD-flex ${navClasses}`} />
    </header>
  );
};

export default Header;
