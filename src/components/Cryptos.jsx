import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';

export const Cryptos = ({ amount }) => {
  const cryptoAmount = amount ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(cryptoAmount);
  const [coins, setCoins] = useState([]);

  // Input value update and filter.
  const [cryptoSearch, setCryptoSearch] = useState('');
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(cryptoSearch.toLowerCase())
    );
    setCoins(filteredData);
  }, [cryptoSearch, cryptoList]);

  if (isFetching) return 'Loading...';

  return (
    <>
      {cryptoAmount === 100 ? (
        <div className='form'>
          <input
            className='form-control form__input'
            type='text'
            placeholder='Search cryptos'
            onChange={(e) => setCryptoSearch(e.target.value)}
          ></input>
        </div>
      ) : (
        ''
      )}
      <div className='cryptos-container'>
        {coins?.map((coin, i) => (
          <div className='card-container' key={i}>
            <div className='card' style={{ backgroundColor: `${coin.color}` }}>
              <p className='card__title'>
                {coin.rank}. {coin.name}
              </p>
              <img src={coin.iconUrl} alt={coin.name} className='card__img' />
            </div>
            <div className='card__separator' />
            <div className='card-info'>
              <p className='card-info__stats'>Price: {millify(coin.price)}</p>
              <p className='card-info__stats'>
                Market Cap: {millify(coin.marketCap)}
              </p>
              <p className='card-info__stats'>
                Daily Change: {millify(coin.change)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
