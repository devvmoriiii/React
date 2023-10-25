const root = document.querySelector("#root")

const Container = () => {
  const [count, setCount] = React.useState(0);
  // function btnClick() {
  //   // setCount(count + 1)
  //   setCount(
  //     function (count) {
  //       return count + 1
  //     }
  //   )
  // }
  function btnClick() {
    setCount(count => count + 1)
  }
  return (
    <div>
      <h3>Total clicks : {count}</h3>
      <button id="btn" onClick={btnClick}>
        Click Me !
      </button>
    </div>
  );
};

ReactDOM.render(<Container />, root);

