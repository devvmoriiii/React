const rootDiv = document.querySelector("#root")

const App = () => {
  function SaveBtn() {
    return (
      <button style={{
        border: "1px solid #ccc",
        padding: "5px 10px",
        margin: "10px",
        backgroundColor : "#fff"
      }}>
      SAVE</button>
    )
  }
  function CheckBtn() {
    return (
      <button>CHECK</button>
    )
  }

  return (
    <div>
    <SaveBtn />
    <CheckBtn />
    </div>
  )
  
}

ReactDOM.render(<App />, rootDiv)