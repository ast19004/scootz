import { useState } from "react";
import MainNav from "./MainNav";

import { IconButton, Menu } from "@mui/material";
import HamburgerIcon from "../../HamburgerIcon";

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const userMenuOpen = !!anchorEl;

  const handleMenuClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        style={{
          marginLeft: "auto",
        }}
        onClick={handleMenuClick}
        size="medium"
        aria-controls={userMenuOpen ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={userMenuOpen ? "true" : undefined}
      >
        <HamburgerIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="user-menu"
        open={userMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MainNav />
      </Menu>
    </>
  );
};

export default HamburgerMenu;
