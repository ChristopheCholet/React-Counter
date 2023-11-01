import { useState } from "react";
import "./App.css";
// import Increment from "./components/Increment";

function App() {
  console.log("App se render");

  const [count, setCounter] = useState(0);
  let counter = 0;

  return (
    <>
      <header>
        <h1>React Counter</h1>
      </header>
      <p>{counter}</p>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}
export default App;
