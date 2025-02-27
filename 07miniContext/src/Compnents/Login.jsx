import{useState,useContext}from "react";
import UserContext from "../context/UserContext";


function Login(){
    const[username,setUsername]=useState('')
    const[Passwords,setPasswords]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,Passwords})
    }
    return(
        <div> 
            <h1>Login</h1>
            <input type="text" value={username}
          onChange={(e)=>setUsername(e.target.value)}  placeholder="username"/>
            <input type="text" value={Passwords}
          onChange={(e)=>setPasswords(e.target.value)}
            placeholder="Password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
       
    )

}
export default Login