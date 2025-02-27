
import './App.css'
import UserContextProvider from './context/UserContextPreovider'
import Login from './Compnents/Login'
import Profile from './Compnents/Profile'
function App() {


  return (
    <>
    <UserContextProvider>
    <h1>React with Me</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    </>
    
  )
}

export default App
