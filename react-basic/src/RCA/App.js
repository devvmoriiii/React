import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RCA from "./RCA";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RCA />} />
      </Routes>
    </Router>
  );
}

export default App;
