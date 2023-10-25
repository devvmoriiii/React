const rootDiv = document.querySelector("#root");
let count = 0;

function btnClick() {
  count += 1;
  ReactDOM.render(<Container />, rootDiv)
}

const Container = () => (
  <div>
    <h3>Count : {count}</h3>
    <button onClick = {btnClick}>Click Me!</button>
  </div>
);

ReactDOM.render(<Container />, rootDiv)