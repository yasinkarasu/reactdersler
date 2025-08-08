import React, { useState } from 'react';
import '../App.css';

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const createTodo = () => {
    if (!newTodo.trim()) return;
    const request = {
      id: Math.floor(Math.random() * 1_000_000_000),
      content: newTodo.trim(),
    };
    onCreateTodo(request);
    setNewTodo('');
  };

  return (
    <div className='todo-create'>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className='todo-input'
        type='text'
        placeholder='Todo giriniz'
      />
      <button className='todo-create-button' onClick={createTodo}>
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
