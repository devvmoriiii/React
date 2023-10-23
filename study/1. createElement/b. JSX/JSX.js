const root = document.querySelector("#root")

const Header = () => (
  <h3 id="header-id" style={{ color: "red" }}>
    This is header!
  </h3>
);
const Btn = () =>
  <button>
    Click Me!
  </button>

const Container = (
  <div>
    <Header />
    <Btn />
  </div>
)

ReactDOM.render(Container, root);


