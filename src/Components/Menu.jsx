import React, { useState } from 'react';
import './menu.css';

const Menu = ({ openMenu, setOpenMenu, sharedApp, setIsMisPedidos, setIsHome, setIsCarrito}) => {
  return (
    <div className="menu-container">
     
      <div className={`menu ${openMenu ? 'open' : ''}`}>
        <ul>
          <li>
            <button
            onClick={() => { 
              setOpenMenu((prev) => !prev);
              sharedApp();
            }}
            >Compartir App por link
            </button>
          </li>
          <li>
            <button
            onClick={() => { setOpenMenu((prev) => !prev)}}
            >Compartir App por QR
            </button>
          </li>
          <li>
            <button
            onClick={() => { 
              setOpenMenu((prev) => !prev);
              setIsMisPedidos(true);
              setIsHome(false);
              setIsCarrito(false)
              } 
            }
            >Mis pedidos
            </button>
          </li>
          <li><button
            onClick={() => { setOpenMenu((prev) => !prev)}}
          >CVU/CBU</button></li>
          <li><button
            onClick={() => { setOpenMenu((prev) => !prev)}}
          >Alias</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
