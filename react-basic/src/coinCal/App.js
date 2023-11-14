import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinCal from "./coinCalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinCal />} />
      </Routes>
    </Router>
  );
}

export default App;
