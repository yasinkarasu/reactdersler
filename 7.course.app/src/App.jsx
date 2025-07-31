import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './Component/Course'
import './css/Course.css'
function App() {
 
  return (
    <div>

      <div>
          <Header />

        <div className='course-main'>
      
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }

         </div>
        
      </div> 

    </div>

  )
}

export default App
