import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL = 'http://localhost:3005'

function App() {

  const getAllUsers =  async() => {

    const responce =  await axios.get(`${BASE_URL}/users`);
    console.log(responce)
  }

   const getUserById = async(userId) => {

    const responce = await axios.get(BASE_URL + "/users/" + userId);
    console.log(responce.data)
  }


  useEffect(() => {
    // getAllUsers();
    getUserById(1);

  }, [])


  return (
    <div>

    </div>
  )
}

export default App
