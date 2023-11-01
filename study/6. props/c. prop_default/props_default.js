const rootDiv = document.querySelector("#root")

const App = () => {
  function Btn({text = "default", color}) {
    return (
      <button 
        style={{
        border: "1px solid #ccc",
        padding: "5px 10px",
        margin: "10px",
        backgroundColor : "#fff",
        color: color
        }}
      >
      {text}
      </button>
    )
  }

  return (
    <div>
    <Btn text={"Boom!"} color={"red"} />
    <Btn color={"blue"} />
    </div>
  )
}

ReactDOM.render(<App />, rootDiv)