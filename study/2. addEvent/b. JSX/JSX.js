const root = document.querySelector("#root")

function btnClick() {
  console.log("clicked!");
}
const Btn1 = () => (
  <button onClick = {btnClick}>
  CLick Me!
  </button>
)
const Btn2 = () => (
<button onClick = {() => console.log("boom!")}>
  click me, too!
  </button>
);

const Container = 
  <div>
    <Btn1 />
    <Btn2 />
  </div>

ReactDOM.render(Container, root);


