import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // Orange
      main: "#F38631",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const ActionButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        className={props.className}
        href={props.href}
        onClick={props.onClick}
        variant="contained"
        sx={{ borderRadius: "25px", color: "white" }}
      >
        {props.children}
      </Button>
    </ThemeProvider>
  );
};

export default ActionButton;
