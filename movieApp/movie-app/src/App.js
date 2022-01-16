import { useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);

  const counterUp = () => {
    setCounter((current) => current + 1);
  };

  return (
    <div>
      <h1>Hello World {counter}</h1>
      <Button onclickFunc={counterUp} text="버튼이름"></Button>
    </div>
  );
}

export default App;
