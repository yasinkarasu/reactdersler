import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // String tckn = "12345678901"
  // useState ile tckn'yi tutalım : hooks

  // useState : Bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.

/*
  const[firstName, setFirstName] = useState("Yasin");
  const [names, setNames] = useState(["Yasin", "Şeyma"]);
  const [userInfo, setUserInfo] = useState({ name: "Yasin", password: "123456" });
  const [show, setShow] = useState(true);

*/

  const [count, setCount] = useState(0);


  const arttir = () => {
    setCount(count + 1);
  }
  const azalt = () => {
    if (count <= 0) {
      return;
    }
    // count = cousnt - 1; // bu şekilde state değiştirilemez
    setCount(count - 1);
  }

  console.log("component render edildi");

  return (
  
   <div>


      <div> {count} </div>
      <div><button onClick={arttir} > Arttır</button></div>
      <div><button onClick={azalt} > Azalt</button></div>


  
      { /* <div>
          {show ? <div> {userInfo.name} {userInfo.password} </div> : <div> Kullanıcı Bilgisi Yok </div>}
      </div > */}

   

      {/* <div>
        <div>
          {firstName}
        </div>
        <div>
          <button onClick={handleChange}>İsmi Değiştir</button>
        </div> */}

        {/* {firstName} {lastName} */}
      {/* </div> */}

   </div>
  )
}

export default App
