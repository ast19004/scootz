import "./App.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome";
import DestinationsContainer from "./components/Destinations/DestinationsContainer";
import PricingContainer from "./components/Pricing/PricingContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <DestinationsContainer />
      <PricingContainer />
    </div>
  );
}

export default App;
