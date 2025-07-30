import React from 'react'

function Container({children}) {
  // props = {children: [<Product />, <Product />, <Product />]}
  return (
    <div>
      <div>Container çalışıyor</div> <br />
      {children}
    </div>
  )
}

export default Container