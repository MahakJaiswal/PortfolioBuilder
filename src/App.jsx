import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Components/Routing";

function App() {
  return (
    <Router>
      <div>
        <Routing />
      </div>
    </Router>
  );
}

export default App;
