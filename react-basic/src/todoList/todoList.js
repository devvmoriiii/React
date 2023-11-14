import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos(todos => [todo, ...todos])
  }
  console.log(todos)
  

  
  return (
    <div>
      <h1>Today's my To Dos ({todos.length})</h1> 
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter your to-do list" onChange={onChange} value={todo} />
        <button>Add</button>
      </form>
      <hr />
      <ul>
      {todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App;