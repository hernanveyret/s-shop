import React from 'react';

import './verQr.css';

const VerQr = ({onQr, setOnQr}) => {
  return (
    <div className="container-qr">      
      
        <img src='./img/qr-carrito.webp' alt="Qr" className="img"/>
      
      <button 
        className="btn-qr"
        onClick={() => {setOnQr(false)}}>
        <svg xmlns="http://www.w3.org/2000/svg" 
          height="24px"
          viewBox="0 -960 960 960" 
          width="24px" 
          fill="white">
            <path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/>
        </svg>
      </button>
    </div>
  )
}
export default VerQr;