import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 color p-4 rounded-xl  text-gray-950' >Aman Maurya</h1>
     <button className='p-3 text-rose-300 bg-slate-300'>new btn </button>
      <Card  userName = "card 1 " newText= "this is the card 1  "/>
      <Card  userName = "card 2 " newText= "this is the card 2  "/>
      <Card />
     
    </>
  )
}

export default App
