import { useState } from 'react'

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setcolor("red")}
          className='outline-none px-4 shadow-lg
           text-white py-1'style={{backgroundColor:'red'}} >Red
           </button>
           <button onClick={()=>setcolor("green")}
           className='outline-none px-4 shadow-lg
           text-white py-1'style={{backgroundColor:'green'}} >Green
           </button>
           <button onClick={()=>setcolor("Blue")}
           className='outline-none px-4 shadow-lg
           text-white py-1'style={{backgroundColor:'blue'}} >Blue
           </button>
           <button onClick={()=>setcolor("pink")}
           className='outline-none px-4 shadow-lg
           text-white py-1'style={{backgroundColor:'pink'}} >Pink
           </button>
           <button onClick={()=>setcolor("Purple")}
           className='outline-none px-4 shadow-lg
           text-white py-1'style={{backgroundColor:'purple'}} >Purple
           </button>
               
    </div>
    </div>
  </div>
   
  )
}

export default App
