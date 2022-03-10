import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CryptoHome } from './components/CryptoHome';
import { CryptoInfo } from './components/CryptoInfo';
import { Cryptos } from './components/Cryptos';
import { Exchanges } from './components/Exchanges';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { News } from './components/News';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route exact path='/' element={<CryptoHome />} />

          <Route exact path='/cryptocurrencies' element={<Cryptos />} />

          <Route exact path='/exchanges' element={<Exchanges />} />

          <Route exact path='/news' element={<News />} />

          <Route exact path='/cryptoinfo/:cryptoId' element={<CryptoInfo />} />

          <Route path='/' element={<CryptoHome />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
