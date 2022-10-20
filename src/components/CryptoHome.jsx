import React from 'react'
import millify from 'millify'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptos } from './Cryptos'
import { Link } from 'react-router-dom'
import { News } from './News'

export const CryptoHome = () => {
  const { data, isFetching } = useGetCryptosQuery(10)

  const globalCryptoStats = data?.data?.stats

  if (isFetching) return 'loading...'

  return (
    <div className='crypto-container'>
      <h1 className='crypto-container__title'>Global cryptos info</h1>
      <div className='crypto-wrapper'>
        <div className='crypto'>
          <p className='crypto__subtitle'>Total Cryptocurrencies</p>
          <p className='crypto__stats'>{globalCryptoStats?.total}</p>
        </div>
        <div className='crypto'>
          <p className='crypto__subtitle'>Total Exchanges</p>
          <p className='crypto__stats'>
            {millify(globalCryptoStats?.totalExchanges)}
          </p>
        </div>
        <div className='crypto'>
          <p className='crypto__subtitle'>Total Market Cap</p>
          <p className='crypto__stats'>
            {millify(globalCryptoStats?.totalMarketCap)}
          </p>
        </div>
        <div className='crypto'>
          <p className='crypto__subtitle'>Total 24h Volume</p>
          <p className='crypto__stats'>
            {millify(globalCryptoStats?.total24hVolume)}
          </p>
        </div>
        <div className='crypto'>
          <p className='crypto__subtitle'>Total Markets</p>
          <p className='crypto__stats'>
            {millify(globalCryptoStats?.totalMarkets)}
          </p>
        </div>
        <div className='crypto'>
          <p className='crypto__subtitle'>Total cryptocurrencies</p>
          <p className='crypto__stats'>{globalCryptoStats?.total}</p>
        </div>
      </div>
      <div className='cryptos-list'>
        <h2 className='cryptos-list__title'>Top 10 cryptos in the market</h2>
        <Link to='/cryptocurrencies' className='cryptos-list__link'>
          <h4>Show more</h4>
        </Link>
      </div>
      <Cryptos amount />
      <div className='cryptos-list'>
        <h2 className='cryptos-list__title'>Most recent news</h2>
        <Link to='/news' className='cryptos-list__link'>
          <h4>Show more</h4>
        </Link>
      </div>
      <News amount />
    </div>
  )
}
