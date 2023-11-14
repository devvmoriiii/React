import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Ta-da!");
    return (() => {console.log("Bye..")})
  }, [])
  return (
    <h1>1:05 ───|────── 2:53</h1>
  )
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(show => !show)
  }

  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? "Playing" : "Stopping"}</button>
    </div>
  );
}

export default App;
