import { List, ListItemButton, ListItemText } from "@mui/material";

import styled from "styled-components";
import ActionButton from "../../ActionButton";
import Logo from "../Logo";

const fontSize = "12px";

const MainNav = (props) => {
  const mobileStyles = props.mobile ? { textAlign: "center" } : {};

  return (
    <>
      {props.mobile && <Logo mobile={true} />}
      <List className={props.className} component="nav">
        <ListItemButton component="a" href="#">
          <ListItemText
            sx={mobileStyles}
            primary="Home"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#locations">
          <ListItemText
            sx={mobileStyles}
            primary="Locations"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#pricing">
          <ListItemText
            sx={mobileStyles}
            primary="Pricing"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemText
            sx={mobileStyles}
            primary="Community"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemText
            sx={mobileStyles}
            primary="Contact"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <CustomActionButton href="#booking">Book Now</CustomActionButton>
      </List>
    </>
  );
};

export default MainNav;

const CustomActionButton = styled(ActionButton)`
  display: block !important;
  margin: 0 auto !important;
  margin-top: 25px !important;
`;
