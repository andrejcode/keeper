import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const Header = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <div className="logo">
        <FaRegLightbulb className="bulb-image" />
        <h1>Keeper</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="search"
          type="text"
          role="searchbox"
          placeholder="Search for notes"
          value={search}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
