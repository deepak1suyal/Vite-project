import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white")
 
  return (
    
      <div className='w-full h-screen duration-300'  style={{backgroundColor:color}}>
    <div className=" flex flex-wrap justify-center insert-x-0 px-2">
      <div className='flex flex-wrap justify-center shadow-lg bg-white px-4 py-2 my-1 rounded-3xl'>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"indigo"}} onClick={()=>setColor("indigo")}>Indigo</button>
        <button className='outline-none px-4 mx-2 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
      </div>
       </div>
      </div>
    
  )
}

export default App
