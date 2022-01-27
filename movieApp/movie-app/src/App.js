import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    //한번만 실행할 예정
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => {
          //coin객체에 id가있기에 그것을 사용하기로함
          return (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) = ${coin.quotes.USD.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
