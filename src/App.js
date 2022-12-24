// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';


 function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('.Blue')
  const [name, setName] = useState('.Comp')

  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWitdh, setWindowWidth] = useState(window.innerWidth)

    function decrementCount() {
      setCount(prevCount => prevCount -1)
      //  setCount(count -1)
   }
    function incrementCount() {
     setCount(prevCount => prevCount +1)
   }
   useEffect (() => {
     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
     .then(Response => Response.json())
     .then(json => setItems(json))  //console.log(json)) 
   },[resourceType])

   const handleResize = () => {      //active display of window size
    setWindowWidth(window.innerWidth)
   }

   useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
     window.removeEventListener('resize', handleResize)  //clean up code
    }
   },[])

  return (
    <>
    <div>{windowWitdh}</div>
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('Users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
       <h1>{resourceType}</h1>
       {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
       })}

    <div> <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <span>{name}</span>
      <button onClick={incrementCount}>+</button>
    </div>
    </>
  )
}

export default App;
