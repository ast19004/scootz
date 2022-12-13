import { List, ListItemButton, ListItemText } from "@mui/material";

const fontSize = "12px";

const MainNav = (props) => {
  return (
    <List
      className={props.className}
      sx={{
        display: "flex",
        gap: "10px",
        textTransform: "uppercase",
        marginLeft: "auto",
        marginRight: "20px",
      }}
      component="nav"
    >
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
    </List>
  );
};

export default MainNav;
