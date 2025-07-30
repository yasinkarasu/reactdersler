import React from 'react'
function Product(props) {
    console.log(props);
  //props = {name: "Ayakkabı", price: 4000, color: "Siyah"}
  //props = {name: "Pantolon", price: 2000, color: "Mavi"}
  return (
    <div>
        <div> ÜRÜN BİLGİLERİ </div> 
        <hr />
        <br />
        <div>
            <div> İsim : {props.productName} </div>
            <div>Fiyat : {props.price} TL </div>
            <div> Renk : {props.color}</div>
        </div>
    </div>
  )
}

export default Product