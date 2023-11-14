import React from "react";
import ReactDOM from "react-dom/client";
// import "./style.css";

// import RCA from "./RCA/App";
// import UseEffect from "./useEffect/App";
// import CleanUp from "./cleanUp/App";
// import TodoList from "./todoList/App";
// import CoinList from "./coinList/App";
// import CoinCal from "./coinCal/App";
import Movie from "./routes/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <div>
      {/* <RCA /> */}
      {/* <UseEffect /> */}
      {/* <CleanUp /> */}
      {/* <TodoList /> */}
      {/* <CoinList /> */}
      {/* <CoinCal /> */}
      <Movie />
    </div>
    // </React.StrictMode>
);
