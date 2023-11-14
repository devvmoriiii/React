import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UseEffect from "./useEffect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< UseEffect/>} />
      </Routes>
    </Router>
  );
}

export default App;
