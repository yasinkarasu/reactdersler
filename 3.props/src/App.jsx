import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  return (

    <div>
      <div> 
        <Container>
          <Product productName="Ayakkabı" price={4000} color="Siyah"/>
          <br />
          <Product productName="Pantolon" price={1500} color="Mavi"/>
          <br />
          <Product productName="Masa" price={2000} color="Beyaz" />
        </Container>
      </div>
      {/* <Product productName="Ayakkabı" price={4000} color="Siyah"/>
      <br />
      <Product productName="Pantolon" price={1500} color="Mavi"/>
      <br />
      <Product productName="Masa" price={2000} color="Beyaz" /> */}
    </div>
  )
}

export default App
