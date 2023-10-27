const rootDiv = document.querySelector("#root")

const App = () => {
  function Btn({text, color, changeText}) {
    return (
      <button 
        style={{
        border: "1px solid #ccc",
        padding: "5px 10px",
        margin: "10px",
        backgroundColor : "#fff",
        color: color ? "red" : "black" 
        }}
        onClick={changeText}
      >
      {text}
      </button>
    )
  }
  
  const [value, setValue] = React.useState("SAVE");
  function changeValue() {
    setValue(value => "Boom!")
  }
  return (
    <div>
    <Btn text={value} color={true} changeText={changeValue} />
    </div>
  )
}

ReactDOM.render(<App />, rootDiv)