import { useState } from "react"

function App() {
const [color, setColor ] = useState('lightblue')

  return (
  <div className="w-full  h-screen  duration-200" style={{backgroundColor: color}}>   
      
   <div className="fixed  flex flex-wrap justify-center align-top pt-10 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3  rounded-xl text-black">
        <button onClick={()=>setColor("red")} 
         className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "red"}}> Red</button>
        <button onClick={()=>setColor("green")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "green"}}> green</button>
        <button onClick={()=>setColor("yellow")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "yellow"}}> Yellow</button>
        <button onClick={()=>setColor("blue")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "blue"}}> blue</button>
        <button onClick={()=>setColor("orange")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "orange"}}> orange</button>
        <button onClick={()=>setColor("pink")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "pink"}}> pink</button>
        <button onClick={()=>setColor("lavender")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "lavender"}}> lavender</button>
        <button onClick={()=>setColor("magenta")} className="outline-none px-4  py-1 rounded-full shadow-lg" style={{backgroundColor: "magenta"}}> magenta</button>
      </div>
   </div>
  </div>
  )
}

export default App
