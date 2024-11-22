import React, { useContext } from 'react'
import './home.css'
import { CoinContext } from '../../context/CoinContext'

const Home = () => {

  const { allCoin } = useContext(CoinContext);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the World's Largest Cryptocurrency Marketplace. Sign up to explore more about cryptos.</p>
        <form action="">
          <input type="text" placeholder='Search crypto...' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign: "center"}}>24H Changes</p>
          <p className='market-cap'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home
