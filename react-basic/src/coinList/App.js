import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinList from "./coinList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinList />} />
      </Routes>
    </Router>
  );
}

export default App;
