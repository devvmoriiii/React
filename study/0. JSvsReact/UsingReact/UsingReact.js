let count = 0;
function btnClick() {
  count += 1;
  console.log(count)
}
const root = document.querySelector("#root")
const countHeader = React.createElement("h3", {class: "countSpan"}, `Total clicks : ${count}`);

const btn = React.createElement("button", {id: "btn", onClick:btnClick}, "click me!")
const container = React.createElement("div", null, [countHeader, btn])

ReactDOM.render(container, root);


