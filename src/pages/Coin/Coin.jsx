import React, { useContext, useEffect, useState } from 'react'
import './coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';

const Coin = () => {

  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () => {
    // const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const options = { method: "GET", headers: { accept: "application/json", 'x-cg-demo-api-key': 'CG-Y3ud9hsBLTwTwe7DDAapjJkB' } };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((json) => setCoinData(json))
      .catch((err) => console.error(err));
  }

  console.log(coinData);
  
  useEffect(() => {
    fetchCoinData();
  }, [currency])

  return (
    <div className="coin">
      <div className="coin-name">
        <div>
          <img src={coinData.image.large} alt={coinData.name} />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin
