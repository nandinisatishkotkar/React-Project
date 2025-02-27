import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const[numberAllowed,setnumberAllowed]=useState(false)
  const[chartAllowed,setchartAllowed]=useState(false)
  const[password,setpassword]=useState("")
 // useRef Hook
  const passwordRef=useRef(null)

  
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed)str+="0123456789"
   if (chartAllowed)str+="!@#$%^&*[](){},~`"
   
   for (let i=1; i<=length; i++) {
   let char=Math.floor(Math.random()*str.length+1)
   pass+=str.charAt(char)
   }
   setpassword(pass)
   
  },[length,numberAllowed,chartAllowed,password])
 const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,99 )
    window.navigator.clipboard.writeText(password)
 },[password])


  useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,chartAllowed])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" value={password} placeholder='password'
    className='outline-none w-full py-1 px-3'readOnly ref={passwordRef}/>
    <button onClick={copyPasswordToClipboard} className='bg-blue-700 text-white  '>copy</button>
    </div>
    
    <div className='flex text-sm gap-x-2'>
    <div className='flex-items-center gap-x-1'>
      <input type="range" max={100}value={length}className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}/>
      <label>Length {length}</label>
    </div>
    <div className='flex-items-center gap-x-1'>
      <input type="checkbox"defaultChecked={numberAllowed}id="numberAllowed"
      onChange={()=>{
        setnumberAllowed((prev)=>!prev)
      }}/>
      <label htmlFor='numberInput'>Numbers</label>
    </div>
    <div className='flex-items-center gap-x-1'>
      <input type="checkbox"defaultChecked={chartAllowed}id="charAllowed"
      onChange={()=>{
        setchartAllowed((prev)=>!prev)
      }}/>
      <label htmlFor='characterInput'>Characters</label>
    </div>
     </div>
     </div>
    </>
      
  )
}

export default App
