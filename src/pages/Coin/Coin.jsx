import React, { useState } from 'react'
import './coin.css'
import { useParams } from 'react-router-dom'

const Coin = () => {

  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();

  const fetchCoinData = async () => {
    // const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Coin : {coinId}</h1>
    </div>
  )
}

export default Coin
