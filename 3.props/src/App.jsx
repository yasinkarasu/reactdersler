import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
      <Product />
    </div>
  )
}

export default App
