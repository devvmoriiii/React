import { useState, useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(undefined);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
      });
  }, []);
  const onChange = (e) => {setDollar(dollar => e.target.value)}

  return (
    <div>
      <h1>The Coins!</h1>
      <input
        type="text"
        placeholder="Enter the price to be calculate. ($)"
        onChange={onChange}
        value={dollar}
        style={{ width: "250px" }}
      />
      <span style={{ margin: "20px" }}>▶︎</span>
      {dollar === undefined ? null : (
        <select size="10">
          {coins.map((item) => (
            <option key={item.id}>
              {item.name} : {dollar / item.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
