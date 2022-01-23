import { useState } from "react";
import MinutesToHours from "./MinutesToHours";
import CmToKm from "./CmToKm";

function App() {
  const [flip, setFlip] = useState(false);

  const clickFlipHandler = () => {
    setFlip((current) => !current);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <button onClick={clickFlipHandler}>바꾸기</button>
      {flip === true ? <MinutesToHours /> : <CmToKm />}
    </div>
  );
}

export default App;
