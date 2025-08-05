import React from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import '../App.css'


function Todo() {
  return (
    <div style={{display: 'flex' , flexDirection:'row',alignItems:'center',justifyContent:'space-between', border: '1px solid lightgrey', padding: '10px'}}>
        <div>
            ben ilk todoyum
        </div>
        <div>
            <IoMdRemoveCircle className='todo-icons'/>
            <FaRegEdit className='todo-icons' />
        </div>
    </div>
  )
}

export default Todo