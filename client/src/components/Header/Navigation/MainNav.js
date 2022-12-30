import { List, ListItemButton, ListItemText } from "@mui/material";

import ActionButton from "../../ActionButton";
import Logo from "../Logo";
const fontSize = "12px";

const MainNav = (props) => {
  return (
    <>
      {props.mobile && <Logo mobile={true} />}
      <List className={props.className} component="nav">
        <ListItemButton component="a" href="#">
          <ListItemText
            primary="Home"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemText
            primary="Pricing"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemText
            primary="Tours"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemText
            primary="Community"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ListItemButton component="a" href="#">
          <ListItemText
            primary="Contact"
            primaryTypographyProps={{ fontSize: { fontSize } }}
          />
        </ListItemButton>
        <ActionButton className={props.className}>Book Now</ActionButton>
      </List>
    </>
  );
};

export default MainNav;
