// App.jsx
import React from 'react';
import './App.css';
import Login from './login';
import {users} from './login';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Hello />
    </div>
  );
}

export default App;