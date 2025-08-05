import React, { useState } from "react";
import '../css/currency.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import axios from 'axios';

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_oKrFyv1ZhLRWHu6HTT9pY6xK4LiIGrww67pMdJ2a";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY'); // TL DİKKAT ET API’de “TRY” olarak geçer
  const [result, setResult] = useState(0);


  const exchange = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
      );
      // Gelen veriden toCurrency anahtarını alıp hesaplıyoruz
      const rates = response.data.data;
      const rate = rates[toCurrency];
      setResult((amount * rate).toFixed(2));
    } catch (err) {
      console.error("Kur çekme hatası:", err);
    }
  }

  return (
    <div className="currency-div">
      <div style={{ fontFamily: 'Arial', backgroundColor: "blue", color: 'white', width: '100%', textAlign: 'center', padding: '10px'}}>
        <h2>Döviz Kuru Uygulaması</h2>
      </div>

      <div style={{ marginTop: '20px' }}>
        <input value={amount} onChange={e => setAmount(e.target.value)} type="number" className="amount"/>
        <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} className='from-currency-option'>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="TRY">TRY</option>
        </select>

        <FaArrowRightArrowLeft
          style={{ fontSize: '25px', margin: '0 10px' }}
        />

        <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} className='to-currency-option'>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>

        <input value={result} readOnly type="text" className='result'/>
      </div>

      <div>
        <button onClick={exchange} className="exchange-button">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
