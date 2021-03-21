import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CoinsList from '../coins-list/coins-list.component';

import './coins.styles.css';


function Coins() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className="coin-text">Search a coin</h1>
          <form>
            <input type='text' placeholder='Search' className='coin-input' onChange={handleChange} />
          </form>
        </div>
        {filteredCoins.map(coin => {
          return <CoinsList 
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />;
        })}
      </div>
    )
}

export default Coins;

