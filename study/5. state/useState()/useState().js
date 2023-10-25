const root = document.querySelector("#root")

const Container = () => { 
  const [value, setValue] = React.useState(0);
  function btnClick () {
    setValue(value + 1)
  };

  return (
    <div>
      <h3>value : {value}</h3>
      <button id="btn" onClick={btnClick}>
        Click Me !
      </button>
    </div>
  );
};

ReactDOM.render(<Container />, root);



