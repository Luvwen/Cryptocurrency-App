import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

import './styles.css';

export const CryptoInfo = () => {
  const { cryptoId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');

  const { data, isFetching } = useGetCryptoDetailsQuery(cryptoId);

  if (isFetching) return 'Loading...';

  const coinData = data?.data?.coin;
  console.log(coinData);

  return (
    <>
      <div className='coin-container'>
        <img
          className='coin-container__logo'
          src={coinData.iconUrl}
          alt={coinData.name}
          width='35px'
          height='35px'
        />
        <h1>{coinData.name}</h1>
      </div>
      <div className='coin-info-container'>
        <div>
          <h5>Coin Rank</h5>
          <p>{coinData.rank}</p>
        </div>
        <div>
          <h5>Coin Price</h5>
          <p>{millify(coinData.price)}</p>
        </div>
        <div>
          <h5>Coin Change</h5>
          <p
            className={
              coinData.change > 0 ? 'color-change__green' : 'color-change__red'
            }
          >
            {coinData.change}
          </p>
        </div>
      </div>
      <div className='coin-wrapper'>
        <div>Aca va el chart</div>
        <div className='coin-statistics'>
          <h4>{coinData.name} Value Statistics</h4>
          <div className='coin-statistics-container'>
            <img
              className='coin-statistics-container__img'
              src={coinData.iconUrl}
              alt='#'
              width='35px'
              height='35px'
            />
            <p className='coin-statistics-container__title'>Price to USD</p>
            <p className='coin-statistics-container__value'>
              ${millify(coinData.price)}
            </p>
          </div>
          <div className='coin-statistics-container'>
            <img
              className='coin-statistics-container__img'
              src={coinData.iconUrl}
              alt='#'
              width='35px'
              height='35px'
            />
            <p className='coin-statistics-container__title'>Rank</p>
            <p className='coin-statistics-container__value'>{coinData.rank}</p>
          </div>
          <div className='coin-statistics-container'>
            <img
              className='coin-statistics-container__img'
              src={coinData.iconUrl}
              alt='#'
              width='35px'
              height='35px'
            />
            <p className='coin-statistics-container__title'>24h Volume</p>
            <p className='coin-statistics-container__value'>
              {millify(coinData['24hVolume'])}
            </p>
          </div>
          <div className='coin-statistics-container'>
            <img
              className='coin-statistics-container__img'
              src={coinData.iconUrl}
              alt='#'
              width='35px'
              height='35px'
            />
            <p className='coin-statistics-container__title'>Market Cap</p>
            <p className='coin-statistics-container__value'>
              {millify(coinData.marketCap)}
            </p>
          </div>
          <div className='coin-statistics-container'>
            <img
              className='coin-statistics-container__img'
              src={coinData.iconUrl}
              alt='#'
              width='35px'
              height='35px'
            />
            <p className='coin-statistics-container__title'>
              All-time-high(daily avg)
            </p>
            <p className='coin-statistics-container__value'>
              {millify(coinData.allTimeHigh?.price)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>What is {coinData.name}</h2>
        <div>{HTMLReactParser(coinData.description)}</div>
      </div>
    </>
  );
};
