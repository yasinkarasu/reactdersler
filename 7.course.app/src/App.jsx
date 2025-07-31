import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './Component/Course'
function App() {

  return (
    <div>


      <div>
        
          <Header />

        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
        
      </div> 


    </div>

  )
}

export default App
