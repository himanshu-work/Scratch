import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const{id}=useParams();
  return (
    <div>
        <h2>User Profile</h2>
        <p>ID: {id}</p>
    </div>
  )
}

export default User