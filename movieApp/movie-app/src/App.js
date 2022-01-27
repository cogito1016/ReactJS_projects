import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [property, setProperty] = useState(0);

  useEffect(() => {
    //한번만 실행할 예정
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangePropertyHandler = (e) => {
    setProperty(e.target.value);
  };

  console.log(property);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <label htmlFor="property">Property : </label>
          <input
            id="property"
            type="number"
            value={property}
            placeholder="Write your property"
            onChange={onChangePropertyHandler}
          />
          <br />
          <select>
            {coins.map((coin) => {
              //coin객체에 id가있기에 그것을 사용하기로함
              return (
                <option key={coin.id}>
                  {coin.name} ({coin.symbol})
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
