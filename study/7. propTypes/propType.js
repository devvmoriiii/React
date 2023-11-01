const rootDiv = document.querySelector("#root")

const App = () => {
  function Btn({text, color, size}) {
    return (
      <button 
        style={{
        border: "1px solid #ccc",
        padding: "5px 10px",
        margin: "10px",
        backgroundColor : "#fff",
        color: color ? "red" : "black",
        fontSize : size
        }}
      >
      {text}
      </button>
    )
  }
  Btn.propTypes = {
    text: PropTypes.string,
    color : PropTypes.bool,
    size : PropTypes.number,
  }

  return (
    <div>
    <Btn text={100} color={300} size = {20} />
    </div>
  )
}

ReactDOM.render(<App />, rootDiv)
