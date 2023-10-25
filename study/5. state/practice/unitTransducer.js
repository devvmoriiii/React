const rootDiv = document.querySelector("#root")

const MinutesAndHours =  () => {
  const [data, setData] = React.useState(0);
  const [cantWrite, setcantWrite] = React.useState(true);
  const inputOnChange = (event) => {
    setData(event.target.value);
  };
  const btnReverse = () => {
    setcantWrite(
      function(cantWrite) {
        return !cantWrite
      }
    )
    setData(0); 
  }
  function btnReset() {
    setData(0);
  }

  return (
    <div class="container">
      <h3>Minutes ←→ Hours</h3>
      <div>
        <input
          id="minutes"
          value={!cantWrite ? (data * 60) : data}
          type="number"
          placeholder="minutes"
          onChange={inputOnChange}
          disabled={!cantWrite}
        />
        <label htmlFor="minutes"> Min.</label>
      </div>
      <span>↑↓</span>
      <div>
        <input id = "hours" 
        value={cantWrite ? (data/60).toFixed(1) : data} 
        type="number" 
        placeholder="Hours" 
        disabled={cantWrite}
        onChange={inputOnChange}
        />
        <label htmlFor="hours"> Hour</label>
      </div>
      <button onClick={btnReverse}>Reverse</button>
      <button onClick={btnReset}>Reset</button>
    </div>
  );
}
const KmAndMiles = () => {
  const [data, setData] = React.useState(0);
  const [cantWrite, setCantWrite] = React.useState(true);

  const inputChange = (event) => {
    setData(event.target.value);
  }

  const btnReverse = () => {
    setCantWrite(cantWrite => !cantWrite) 
    setData(0)
  }
  const btnReset = () => {
    setData(0)
  }

  return (
    <div class="container">
      <h3>Km ←→ Mile</h3>
      <div>
        <input 
          type="number"
          value={!cantWrite ? (data/0.6214).toFixed(4) : data}
          id="km"
          placeholder="Km"
          onChange = {inputChange}
          disabled ={!cantWrite}
        />
        <label htmlFor="km">Km</label>
      </div>
      <span>↑↓</span>
      <div>
        <input 
          type="number"
          value={cantWrite ? (data * 0.6214).toFixed(4): data}
          id="mile"
          placeholder="Mile"
          disabled = {cantWrite}
          onChange = {inputChange}
        />
        <label htmlFor="mile">Mile</label>
      </div>
      <button onClick = {btnReverse}>Reverse</button>
      <button onClick = {btnReset}>Reset</button>
    </div>
  )
}
const UnitConverter =  () => {
  const [index, setIndex] = React.useState();
  const converterList = [<MinutesAndHours />, <KmAndMiles />]
  function selectChange(event) {
    setIndex(index => event.target.value)
  }
  return (
    <div>
      <select
        onChange = {selectChange}
      >
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Hours</option>
        <option selected>None</option>
      </select>
      <h1>Unit Transducer</h1>
      {converterList[index]}
    </div>
  );
}

ReactDOM.render(<UnitConverter />, rootDiv)