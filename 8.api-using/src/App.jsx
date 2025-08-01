import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const BASE_URL = 'http://localhost:3005'

function App() {
  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`)
      console.log(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`)
      console.log(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  const createUser = async (newUser) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, newUser)
      console.log("response:", response.data)
    } catch (err) {
      console.error(err)
    }
  }  // ← Burada fonksiyon bitiyor


  const updateUser = async (userId, updatedUser) => {
    
  useEffect(() => {
    const newUser = {
      username: "deneme Doe",
      password: "324",
    }
    createUser(newUser)
    // Eğer başlangıçta tüm kullanıcıları çekmek isterseniz:
    // getAllUsers()
    // veya tek bir kullanıcı:
    // getUserById(1)
  }, [])

  return (
    <div>
      {/* UI içeriğiniz buraya */}
    </div>
  )
}

export default App
