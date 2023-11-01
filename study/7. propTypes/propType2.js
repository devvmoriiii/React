const rootDiv = document.querySelector("#root")

const App = () => {
  function Btn({text, color}) {
    return (
      <button 
        style={{
        border: "1px solid #ccc",
        padding: "5px 10px",
        margin: "10px",
        backgroundColor : "#fff",
        color: color,
        }}
      >
      {text}
      </button>
    )
  }
  Btn.propTypes = {
    text : PropTypes.string.isRequired,
    color : PropTypes.oneOf(["red", "blue"])
  }

  return (
    <div>
    <Btn text={"Boom!"} color={"green"} />
    <Btn color={"red"} />
    </div>
  )
}

ReactDOM.render(<App />, rootDiv)
