import { useState } from 'react'
import './App.css'

function App() {
  // hooks 
let  [counter , setCounter ]= useState(0)

const addValue = ()=>{
  setCounter(counter + 1 )
  // console.log("click ", Math.random())
}

const removeVAlue = ()=>{
setCounter(counter -1 )

} 



  return (
    <>
     <h1>Counter project in react</h1>
      <h2>counter {counter}</h2>
      <button onClick={addValue}> increase counter</button>
      <br />

      <button onClick={removeVAlue}>decrease counter</button>
    </>
  )
}

export default App
