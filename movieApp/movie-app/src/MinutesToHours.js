import { useState } from "react";

function MinutesToHours() {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const convertHandler = (e) => {
    if (e.target.id === "minutes") {
      const value = e.target.value;
      setMinutes(value);
      setHours(value / 60);
    } else if (e.target.id === "hours") {
      const value = e.target.value;
      setHours(value);
      setMinutes(value * 60);
    }
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <label htmlFor="minutes">분</label>
      <input
        id="minutes"
        placeholder="Minutes"
        type="number"
        value={minutes}
        onChange={(e) => convertHandler(e)}
      />
      <label htmlFor="hours">시</label>
      <input
        id="hours"
        placeholder="Hours"
        type="number"
        value={hours}
        onChange={(e) => convertHandler(e)}
      />
    </div>
  );
}

export default MinutesToHours;
