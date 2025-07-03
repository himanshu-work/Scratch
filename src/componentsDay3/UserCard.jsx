import React from 'react'

const UserCard = ({name,age,hobby}) => {
  return (
    <div style={{ border:'1px solid white',padding:'10px',margin:'10px'}}> 
        <h3>Name: {name}</h3>
        <p>Age: {age} </p>
        <p>Hobby:{hobby}</p>
    </div>
  )
}

export default UserCard