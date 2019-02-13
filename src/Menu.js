import React from 'react';

import GlobalMenu from './GlobalMenu';
import LocalMenu from './LocalMenu';

import './Menu.css';

const Menu = () => 
  <div className="Menu">
    <GlobalMenu />
    <LocalMenu />
  </div>

export default Menu;
