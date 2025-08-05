import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currency from './components/Currency'

// App.jsx
function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',   // dikeyde ortala
        alignItems: 'center',       // yatayda ortala
        minHeight: '100vh',         // tüm ekran yüksekliğine yay
      }}
    >
      <Currency />
    </div>
  )
}



export default App
