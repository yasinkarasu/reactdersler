import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>


      <div>
        <h1>
          <Header />
          <p>ali</p>
        </h1>
      </div>


    </div>

  )
}

export default App
