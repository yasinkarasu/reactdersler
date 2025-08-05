import React from "react";
import '../css/currency.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";


function Currency() {
  return (
    <div className="currency-div">
        <div style={{fontFamily: 'arial', backgroundColor: "blue" , color: 'white', width: '100%', textAlign: 'center', padding: '10px'}}>
            <h2 >Döviz Kuru Uygulaması</h2>
        </div>

        <div style={{marginTop: '20px' }}>
            <input type="number" className="amount" />
        <select className='from-currency-option' >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="TRY">TL</option>
        </select>

        <FaArrowRightArrowLeft style={{ fontSize: '25px', marginRight: '10px',}}/>

            <select className='to-currency-option' >
                <option value="TRY">TL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>

            <input type="number" className='result' />

        </div>
        <div>
                <button className="exchange-button">Çevir</button>
        </div>

    </div>
  )
}

export default Currency;