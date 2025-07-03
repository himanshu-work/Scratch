import React from 'react'

const ObjectList = () => {
    const users=[
        {id:1,name:'kumar'},
        {id:2,name:'hunny'},
        {id:3,name:'Ayush'}
    ]
  return (
    <div>
       <ul>
        {
            users.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))
        }
       </ul>
    </div>
  )
}

export default ObjectList