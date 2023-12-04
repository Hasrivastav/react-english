import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'



function App() {
  const [loading,setLoading]=useState(true)   
  const dispatch= useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{})
    .finally()
    .
  }, [third])
  
  return (
    
  )
}

export default App
