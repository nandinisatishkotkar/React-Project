
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "nandini",
    age: 21
  }
  return (
    <>
     <h1 className='bg-green-400 text-balck p-4 rounded-xl'>TailWind Test</h1>
    <Card username="nandini Kotkar" btnText="Click Me " />
    <Card username="nandini" btnText="Click Here to visit profile "/>  
 </>
  )
}

export default App
