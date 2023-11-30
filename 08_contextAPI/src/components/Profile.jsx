import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>please logn</div>
  return  <div>Profile : {user.username}</div>
  
}

export default Profile