import React, { useEffect, useState } from 'react'

function Gituhub() {

    const [data,setData]=useState([])
   useEffect(()=>{
 fetch('hhtps://api.github.com/users/hasrivastav')
 .then((res)=>res.json())
 .then(data=>{
    console.log(data);
    setData(data);
 })

   },[])

  return (
    <div className=' bg-orange-400 text-center text-black p-4 text-3xl '>Gituhub folllowers</div>
  )
}

export default Gituhub