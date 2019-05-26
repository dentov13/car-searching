import React, { useState } from 'react';

const Header = ({ search, error }) => {
  const [id, setId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    search(id);
  };

  return (
    <header className="header">
      <form className="search" onSubmit={handleSubmit}>
        <h1 className="search__title">Проверка авто по номерному знаку</h1>
        <input
          className="search__input"
          placeholder="Номерной знак авто"
          onChange={e => setId(e.target.value)}
        />
        <p className="search__error">{error}</p>
      </form>
    </header>
  );
};

export default Header;
