import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount((current) => current + 1);
  };

  const IRunOnlyOnce = () => {
    console.log("I run only once");
  };

  console.log("I always run");
  useEffect(IRunOnlyOnce, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCountHandler}>Add</button>
    </div>
  );
}

export default App;
