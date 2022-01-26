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
    }
    setToDo("");
    setToDoList((current) => [...current, toDo]);
  };

  console.log(toDoList);

  return (
    <div>
      <h1>ToDoList : {toDoList.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write Your To do ..."
        />
        <button>Add To Do</button>
      </form>
      <ul>
        {toDoList.forEach((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
