import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the World's Largest Cryptocurrency Marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form action="">
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Changes</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{ item.name + " - " + item.symbol }</p>
            </div>
            <p>{currency.symbol} {item.current_price}</p>
            {/* <p>{Math.floor(item.price_change_percentage_24h * 100)}</p>  */}
            <p>{item.price_change_percentage_24h.toFixed(2)}</p>
            <p className="market-cap">{item.market_cap}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
