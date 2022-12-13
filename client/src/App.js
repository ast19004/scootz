import "./App.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome";
import Destinations from "./components/Destinations/Destinations";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Destinations />
    </div>
  );
}

export default App;
