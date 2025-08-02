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

  /*
  const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`)
      console.log(response.data)
    } catch (err) {
      console.error(err)
    }
  }  // ← Burada fonksiyon bitiyor
    */


  const createUser = async (newUser) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, newUser)
      console.log("response:", response.data)
    } catch (err) {
      console.error(err)
    }
  }  // ← Burada fonksiyon bitiyor


  const updateUser = async (userId, updatedUser) => {
    //put ile güncelleme işlemi
    //ALT GR + iki kere virgüle basıyoruz
    axios.put(`${BASE_URL}/users/${userId}`, updatedUser)

  const deleteUserById = async (userId) => {
   const deleteResponce = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data);
  }  // ← Burada fonksiyon bitiyor











  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    return response.data;
  }

  const getPostById = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  }


  const getPost = async (postId) => {
    const userResponce = await getUserById(1);
    console.log(userResponce);

  }


  useEffect(() => {

    getPost();

    //deleteUserById(1739) // Örnek olarak 1739 ID'li kullanıcıyı siler
    // bconst newUser = {
    //  username: "deneme Doe",
    //  password: "324"
    // }
    // createUser(newUser)
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
