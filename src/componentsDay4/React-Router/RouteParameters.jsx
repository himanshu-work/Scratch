import React from 'react'
import { useParams } from 'react-router-dom';
const RouteParameters = () => {
    const{id}=useParams();
  return (
    <div>
         <h2>Viewing user with ID:{id}</h2>
    </div>
  )
}

export default RouteParameters