const span1 = React.createElement("span");
const span2 = React.createElement("span", {class: "span-class", id:"span-id"});
const span3 = React.createElement("span", {class: "span-class", id:"span-id", style: {color: "red"}}, "This is span3!");
const span4 = React.createElement("span", null, "This is span4!");

const container = React.createElement("div", null, [span3, span4]);

const root = document.querySelector("#root")
ReactDOM.render(container, root);