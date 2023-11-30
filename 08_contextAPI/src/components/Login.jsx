import React, { useContext, useState } from 'react'
import userContext from '../context/userContext';

function Login() {

  const [username,setUsername]= useState("");
  const [password, setPassword] = useState("");

   const {setUser} = useContext(userContext)

   const handleSubmit = (e)=>{
    e.preventDefault();
    setUser({username,password})
   }
  return (
    <div>
    <h2>Login</h2>
    <input type='text' 
    value={username}
    onChange={(e)=>{setUsername(e.target.value)}}
    placeholder='username' />
   {"   "}
    <input type='text'  placeholder='password'
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

//to acess the  store values passed you have  to use a react hook  (useContext)
//in login you have to send the data into the store 
//here login component sends  the data to the  store
