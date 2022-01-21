import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const convertHandler = (inputType) => {
    console.log("함수발생");
    if (inputType === "MINUTES") {
      setHours(minutes / 60);
    } else if (inputType === "HOURS") {
      setMinutes(hours * 60);
    }
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <input
        placeholder="Minutes"
        defaultValue={minutes}
        onChange={() => convertHandler("MINUTES")}
      />
      <input
        placeholder="Hours"
        defaultValue={hours}
        onChange={() => convertHandler("HOURS")}
      />
    </div>
  );
}

export default App;
