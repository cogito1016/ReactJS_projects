import { useEffect, useState } from "react";
import { CmToKmConverter } from "./CmToKmConverter";
import { MinuteToHourConverter } from "./MinuteToHourConverter";

function App() {
  const [count, setCount] = useState(0);

  const countClickHandler = () => {
    setCount((current) => current + 1);
  };

  // console.log("APP ALWAYS RUN CODE");

  useEffect(() => {
    console.log("APP CREATE RUN CODE");
  }, []);

  useEffect(() => {
    console.log("APP-COUNTER CHANGE RUN CODE");
  }, [count]);

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={countClickHandler}>Add</button>
      <CmToKmConverter />
      <MinuteToHourConverter />
    </div>
  );
}

export default App;
