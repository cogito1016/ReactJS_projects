import { useState } from "react";

function CmToKm() {
  const [cm, setCm] = useState(0);
  const [km, setKm] = useState(0);

  const convertHandler = (e) => {
    if (e.target.id === "cm") {
      const value = e.target.value;
      setCm(value);
      setKm(value / 1000);
    } else if (e.target.id === "km") {
      const value = e.target.value;
      setKm(value);
      setCm(value * 1000);
    }
  };

  return (
    <div>
      <label htmlFor="cm">CM</label>
      <input
        id="cm"
        placeholder="Cm"
        type="number"
        value={cm}
        onChange={(e) => convertHandler(e)}
      />
      <label htmlFor="km">KM</label>
      <input
        id="km"
        placeholder="Km"
        type="number"
        value={km}
        onChange={(e) => convertHandler(e)}
      />
    </div>
  );
}

export default CmToKm;
