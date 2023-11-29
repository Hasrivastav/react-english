import {useState} from "react";
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" 
    style={{ backgroundColor:color }}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

  <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-3xl">
    <button className="px-5 py-2 outline-none rounded-full text-white shadow-xl" onClick={()=> setColor('red')} style={{backgroundColor:'red'}}>Red</button>
    <button className="px-5 py-2 outline-none rounded-full text-white shadow-xl" onClick={()=> setColor('green')} style={{backgroundColor:'green'}}>Green</button>
    <button className="px-5 py-2 outline-none rounded-full text-white shadow-xl" onClick={()=> setColor('blue')} style={{backgroundColor:'blue'}}>Blue</button>
    <button className="px-5 py-2 outline-none rounded-full text-white shadow-xl" onClick={()=> setColor('yellow')} style={{backgroundColor:'yellow'}}>Yellow</button>
  </div>

</div>
    </div>
 
    </>
  )
}

export default App
 