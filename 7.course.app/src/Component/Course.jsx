import React from 'react'

function Course( {course} ) {

    const {id, title, description, price, link, image} = course;

  return (
    <div className='course'>

        <div>
            <img src={image} width={200} height={110}/>
            <h4 className='course-title'>{title}</h4>
            <h5 className='course-description'>{description}</h5>
            <h3 className='course-price' >{price} ₺ </h3>
            <a className='course-link' href={link}>satın almak için tıklayınız</a>

        </div>

    </div>
  )
}

export default Course