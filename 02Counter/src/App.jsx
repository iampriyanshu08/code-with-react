import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const increase = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter >=1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Code with React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={increase}>increase {counter}</button>

      <button onClick={decrease}>decrease {counter}</button>
    </>
  );
}

export default App;
