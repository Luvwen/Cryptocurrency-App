import moment from 'moment';
import React, { useState } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

export const News = ({ amount }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const { data: cryptoData } = useGetCryptosQuery(100);

  const { data } = useGetCryptoNewsQuery({
    newsCategory,
    count: amount ? 8 : 16,
  });

  const cryptoNews = data?.value;
  if (!cryptoNews) return 'Loading...';

  return (
    <>
      {!amount && (
        <select
          className='form-select form-select-md mb-3 select'
          placeholder='Select a Crypto'
          onChange={(value) =>
            setNewsCategory(value.target.value.toLowerCase())
          }
        >
          <option value='Cryptocurrency'>Cryptocurrency</option>
          {cryptoData?.data?.coins.map((coin) => (
            <option key={coin.uuid} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </select>
      )}
      <div className='news-container'>
        {cryptoNews?.map((news, i) => (
          <div className='news-container__card' key={i}>
            <div className='news-card'>
              <div className='news-card-top'>
                <img
                  src={
                    news?.image?.thumbnail?.contentUrl ||
                    'https://www.iaa-network.com/wp-content/uploads/2020/04/Cryptocurrency-arbitration.jpg'
                  }
                  alt={news.name}
                  className='news-card-top__img'
                />
                <h4 className='news-card-top__title'>{news.name}</h4>
              </div>
              <p className='news-card__description'>{news.description}</p>
              <div className='news-card-bottom'>
                <div className='news-card-bottom-provider'>
                  <img
                    src={
                      news?.provider[0]?.image?.thumbnail?.contentUrl ||
                      'https://www.iaa-network.com/wp-content/uploads/2020/04/Cryptocurrency-arbitration.jpg'
                    }
                    alt={news.provider[0]?.name}
                    className='news-card-bottom-provider__img'
                  />
                  <p className='news-card-bottom-provider__name'>
                    {news.provider[0]?.name}
                  </p>
                </div>
                <p className='news-card-bottom__date'>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
