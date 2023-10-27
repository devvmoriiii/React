const rootDiv = document.querySelector("#root")

function Btn({text, changeText}) {
  console.log(text + " was rendered.")
  return <button onClick={changeText}>{text}</button>;
}

const Memorized = React.memo(Btn)

const App = () => {
  const [value, setValue] = React.useState("SAVE");
  function changeValue() {
    setValue(value => "Boom!")
  }
  return (
    <div>
      <Memorized text={value} changeText={changeValue} />
      <Memorized text="Fix"/>
    </div>
  )
}

ReactDOM.render(<App />, rootDiv)