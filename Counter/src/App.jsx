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
    <div>
      <h1>Counter App 😍</h1>

      <h2>{count}❣️</h2>
      <button  onClick={subtract}>Subtraction👇</button>
      <button  onClick={reset}>Reset♻️</button>
      <button onClick={add}>Addition☝️</button>
      </div>
    </>
  );
}

export default App;
