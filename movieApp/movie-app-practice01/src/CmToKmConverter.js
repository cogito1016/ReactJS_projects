import { useEffect, useState } from "react";

function CmToKmConverter() {
  const [value, setValue] = useState(0);

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  //   console.log("CmToKmConverter ALWAYS RUN CODE");

  useEffect(() => {
    console.log("CmToKmConverter CREATE RUN CODE");
  }, []);

  useEffect(() => {
    console.log("CmToKmConverter CHANGE RUN CODE");
  }, [value]);

  return (
    <div>
      <h1>CmToKmConverter</h1>
      <label htmlFor="cm">CM</label>
      <input
        onChange={changeInputHandler}
        id="cm"
        type="number"
        value={value}
      />
      <label htmlFor="km">KM</label>
      <input
        onChange={changeInputHandler}
        id="km"
        type="number"
        value={value * 1000}
        disabled
      />
    </div>
  );
}

export { CmToKmConverter };
