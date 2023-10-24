let date = "10. 24. 2023";
const rootDiv = document.querySelector("#root");

const Today = () => (
  <h1>
    Today is {date}
  </h1>
)
ReactDOM.render(<Today />, rootDiv);