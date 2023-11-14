import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./todoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
