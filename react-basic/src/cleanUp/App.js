import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CleanUp from "./cleanUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CleanUp />} />
      </Routes>
    </Router>
  );
}

export default App;
