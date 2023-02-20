import React from 'react';
// import { Navbar } from '.components/common/header/Header'
import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo" style={{color: 'white'
         }}>Info Nav</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
        </section>
        <section className="header-bottom__email">
        </section>
      </section>
    </section>
  )
}

export default Header;