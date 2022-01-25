import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    } else {
      const value = toDoList.push(toDo);
      setToDoList(value);
    }
    console.log(toDo);
    console.log(toDoList);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write Your To do ..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
