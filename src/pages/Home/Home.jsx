import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto Meketplace</h1>
        <p>Welcome to the World's Largest Cryptocurrency Marketplace. Sign up to explore more about cryptos.</p>
        <form action="">
          <input type="text" placeholder='Search crypto...' />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home
