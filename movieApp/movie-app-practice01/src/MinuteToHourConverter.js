import { useEffect, useState } from "react";

function MinuteToHourConverter() {
  const [value, setValue] = useState(0);

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  // console.log("MinuteToHourConverter ALWAYS RUN CODE");

  useEffect(() => {
    console.log("MinuteToHourConverter CREATE RUN CODE");
  }, []);

  return (
    <div>
      <h1>MinuteToHourConverter</h1>
      <label htmlFor="minute">MINUTE</label>
      <input
        onChange={changeInputHandler}
        id="minute"
        type="number"
        value={value}
      />
      <label htmlFor="hour">HOUR</label>
      <input
        onChange={changeInputHandler}
        id="hour"
        type="number"
        value={value * 60}
        disabled
      />
    </div>
  );
}

export { MinuteToHourConverter };
