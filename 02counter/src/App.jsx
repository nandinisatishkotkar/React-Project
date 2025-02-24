import { useState } from 'react'
import './App.css'

function App() {

let[counter,setcounter]=useState(15)

// let counter=5

const addValue = () =>{
  if(counter<20){
 counter=counter+1
 setcounter(counter)
  }
}
const removevalue=()=>{
  if(counter>0){
  setcounter(counter-1)
}
}
  return (
    <> <h1>React And Hooks </h1>
      <h2>Add value {counter}</h2>
      <button onClick={addValue}>Add Value  {counter}</button>
      <br/>
      <button onClick={removevalue}> Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
   
  )
}
export default App
