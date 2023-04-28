import "./App.css";

import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome";
import DestinationsContainer from "./components/Destinations/DestinationsContainer";
import PricingContainer from "./components/Pricing/PricingContainer";
import RentalCalendarContainer from "./components/Booking/RentalCalendarContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <DestinationsContainer />
      <PricingContainer />
      <RentalCalendarContainer />
      <ToastContainer />
    </div>
  );
}

export default App;
