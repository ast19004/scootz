import { useState } from "react";
import MainNav from "./MainNav";

import { Twirl as Hamburger } from "hamburger-react";

import { IconButton, Menu } from "@mui/material";

const HamburgerMenu = (props) => {
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
        className={props.className}
        style={{
          marginLeft: "auto",
        }}
        onClick={handleMenuClick}
        size="medium"
        aria-controls={userMenuOpen ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={userMenuOpen ? "true" : undefined}
      >
        <Hamburger
          label="Show menu"
          toggled={userMenuOpen}
          size={24}
          color="darkorange"
        />
      </IconButton>
      <Menu
        className={props.className}
        anchorEl={anchorEl}
        id="user-menu"
        open={userMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            display: "grid",
            justifyContent: "center",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            p: 6,
            paddingBottom: 2,
            width: "80%",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MainNav className={props.className} mobile={true} />
      </Menu>
    </>
  );
};

export default HamburgerMenu;
