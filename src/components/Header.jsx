import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <FaRegLightbulb className="bulb-image" />
      <h1>Keeper</h1>
    </header>
  );
};

export default Header;
