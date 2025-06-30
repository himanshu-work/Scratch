import React from 'react'
const Greeting=()=>{
    return(
        <h1>How are You?</h1>
    )
}
const MultipleComp = () => {
  return (
    <div>
        <h1>Hello !</h1>
        <Greeting/>
    </div>
  )
}

export default MultipleComp