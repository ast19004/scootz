import "./App.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome";
import DestinationsContainer from "./components/Destinations/DestinationsContainer";
import PricingContainer from "./components/Pricing/PricingContainer";
import RentalCalendar from "./components/Booking/RentalCalendar";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <DestinationsContainer />
      <PricingContainer />
      <RentalCalendar />
    </div>
  );
}

export default App;
