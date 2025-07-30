import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function  App() {
  let a =  15;
  //javascript kodlarınızı buraya yazabilirsiniz
  const firstName = "Yasin";

  let vize1 = 60;
  let vize2 = 50;

  let sonuc = true;

  let isimler = ["Yasin", "Ali", "Ayşe", "Fatma", "Mehmet"];
  
  return (

    <div>
      {/* <div>
        <p>a değişkenini değeri : {a} </p> */}
        {/* <p>Müşterinin adı: {firstName} </p>
      </div> */}
      {/* <div>
          <p>Ortalama : {(vize1 + vize2) / 2} </p>

          { sonuc ?
            <p>Sonuç : Başarılı</p>
            :
            <p>Sonuç : Başarısız</p>
          } */}
      {/* </div> */}
      {
        (vize1 + vize2) / 2 >= 45 ? <p>Başarılı</p> : <p>Başarısız</p>
      }

      { isimler.map((isim, index) => (
        <div style={{
          backgroundColor: "green",
          border: "1px solid black",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px"
        }}
          key={index}> {isim}</div>
      ))}

    </div>
  )
}

export default App
