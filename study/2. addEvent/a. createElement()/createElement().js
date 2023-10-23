const root = document.querySelector("#root")

function btnClick() {
  console.log("clicked!");
}
const btn1 = React.createElement("button", {id: "btn", onClick:btnClick}, "click me!")
const btn2 = React.createElement("button", {id: "btn", onClick: () => console.log("boom!")}, "click me, too!")

const btnDiv = React.createElement("div", null, [btn1, btn2])
ReactDOM.render(btnDiv, root);



