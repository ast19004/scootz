import "./App.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome";
import DestinationsContainer from "./components/Destinations/DestinationsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <DestinationsContainer />
    </div>
  );
}

export default App;
