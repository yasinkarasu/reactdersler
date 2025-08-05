import React from 'react'
import '../App.css';

function TodoCreate() {
  return (
    <div className='todo_create'>
        <input className='todo-input' type="text" placeholder='Todo giriniz' />
        <button className='todo-create-button'>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate