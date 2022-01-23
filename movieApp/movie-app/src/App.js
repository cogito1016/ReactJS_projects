import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  console.log("I always run");

  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroy :(");
  }, []);

  useEffect(() => {
    console.log('I run when "keyword" changes');
  }, [keyword]);

  useEffect(() => {
    console.log('I run when "counter" changes');
  }, [count]);

  const searchBarChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  const addCountHandler = () => {
    setCount((current) => current + 1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write it in this field!"
        onChange={searchBarChangeHandler}
      />
      <h1>{count}</h1>
      <button onClick={addCountHandler}>Add</button>
    </div>
  );
}

export default App;
