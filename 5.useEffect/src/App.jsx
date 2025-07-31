import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("Yasin");
  const [lastName, setLastName] = useState("Karasu");

  useEffect(() => {
    console.log("Her zaman çalışır");
  }); // Her renderda çalışır

  useEffect(() => {
    console.log("ilk renderda çalışır");
  }, []); // bir kez çalışır

  useEffect(() => {
    console.log(`firstName değiştiğinde çalışır: ${firstName}`);
  }, [firstName]); // firstName değiştiğinde çalışır

  useEffect(() => {
    console.log(`lastName değiştiğinde çalışır: ${lastName}`);
  }, [lastName]); // lastName değiştiğinde çalışır

  return (
    <div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>
        <button onClick={() => setFirstName("Furkan")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Sarı")}>Soyadı Değiştir</button>
      </div>
    </div>
  );
}

export default App;
