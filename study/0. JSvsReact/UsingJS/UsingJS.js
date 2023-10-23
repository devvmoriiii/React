const btn = document.querySelector("#btn");
const countSpan = document.querySelector("span");
let count = 0;

function btnClick() {
  count += 1;
  countSpan.innerText = `Total clicks : ${count}`;
}

btn.addEventListener("click", btnClick)