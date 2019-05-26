import React from 'react';

const Header = () => (
  <header className="header">
    <form className="search">
      <h1 className="search__title">Проверка авто по номерному знаку</h1>
      <input className="search__input" placeholder="Номерной знак авто" />
      <p className="search__error" />
    </form>
  </header>
);

export default Header;
