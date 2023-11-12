import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCount(prev => prev + 1)
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  console.log("I run all the time.");

  const onlyOnce = () => {
    console.log("I run only once.");
  }
  useEffect(onlyOnce, []);
  useEffect(() => {
    if (count > 0) {
      console.log("Count is changed.");
    }
  }, [count])
  useEffect(() => {
    if (keyword.length > 3) {
      console.log("Keyword is changed.");
    }
  }, [keyword])
  useEffect(() => {
    console.log("Count & keyword are changed.");
  }, [count, keyword])

  return (
    <div>
      <input type="search" placeholder="SEARCH" onChange={onChange} value={keyword}/>
      <h1>Click : {count}</h1> 
      <button onClick={onClick}>Ciick ME!</button>
    </div>
  );
}

export default App;
