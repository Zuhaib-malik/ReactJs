import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };
  const reset = () =>{
    setCount(0);
  }

  return (
    <>
      <h1>Counter App </h1>

      <h1>{count}</h1>
      <button onClick={subtract}>Subtraction</button>
      <button onClick={reset}>Reset</button>
      <button onClick={add}>Addition</button>
    </>
  );
}

export default App;
