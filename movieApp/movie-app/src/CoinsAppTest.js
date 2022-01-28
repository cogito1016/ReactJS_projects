import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [property, setProperty] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState({
    quotes: { USD: { price: 1 } },
    symbol: "$",
  });

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

  const onClickCoinsOptionHandler = (e) => {
    console.log("함수실행");
    console.log(e);
    const selectedIndex = e.target.selectedIndex;
    console.log(`INDEX : ${selectedIndex}`);
    console.log(e.target[selectedIndex].value);
    // setSelectedCoin(e.target[selectedIndex]);
  };

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
          <select onChange={onClickCoinsOptionHandler} value={selectedCoin}>
            {coins.map((coin) => {
              return (
                <option key={coin.id} value={coin}>
                  {coin.name} ({coin.symbol})
                </option>
              );
            })}
          </select>
          <br />
          <h2>
            = {property / selectedCoin.quotes.USD.price} {selectedCoin.symbol}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
