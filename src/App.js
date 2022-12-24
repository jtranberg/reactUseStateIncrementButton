// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('.Blue')
  const [name, setName] = useState('.Comp')

    function decrementCount() {
      setCount(prevCount => prevCount -1)
      //  setCount(count -1)
   }
    function incrementCount() {
     setCount(prevCount => prevCount +1)
   }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <span>{name}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
