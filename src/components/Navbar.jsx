import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export const Navbar = () => {
  return (
    <header className='navbar-container '>
      <p>
        <Link className='navbar-container__logo' to='/'>
          logo
        </Link>
      </p>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list__item'>
            <Link className='nav-list__item-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-list__item'>
            <Link className='nav-list__item-link' to='/news'>
              Latest News
            </Link>
          </li>
          <li className='nav-list__item'>
            <Link className='nav-list__item-link' to='cryptocurrencies'>
              Cryptocurrencies
            </Link>
          </li>
          <li className='nav-list__item'>
            <Link className='nav-list__item-link' to='exchanges'>
              Exchanges
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
