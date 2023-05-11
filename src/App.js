import "./App.css";

import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome";
import DestinationsContainer from "./components/Destinations/DestinationsContainer";
import PricingContainer from "./components/Pricing/PricingContainer";
import RentalCalendarContainer from "./components/Booking/RentalCalendarContainer";
import { Box } from "@mui/material";
import Logo from "./components/Header/Logo";

function App() {
  return (
    <Box className="App" sx={{ position: "relative" }}>
      <Box
        className="app-opening"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "2147483647",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      ></Box>
      <Header />
      <Welcome />
      <DestinationsContainer />
      <PricingContainer />
      <RentalCalendarContainer />
      <ToastContainer />
    </Box>
  );
}

export default App;
