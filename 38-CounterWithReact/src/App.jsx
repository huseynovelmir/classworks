import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function minus() {
    setCount(--count);
  }
  function plus() {
    setCount(++count);
  }
  return (
    <>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </>
  );
}

export default App;
