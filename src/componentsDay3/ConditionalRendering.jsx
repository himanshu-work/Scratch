import React, { useState } from 'react'

const ConditionalRendering = () => {
    const[isLogin,setIsLogin]=useState(false);
  return (
    <div>
        <h2>Auth Example</h2>
        {
            isLogin?(
                <div>
                <p>Welcome Back, user!</p>
                <button onClick={()=>setIsLogin(false)}>Logout</button>
                </div>
            ):(
                <div>
                    <p>You are not logged in</p>
                    <button onClick={()=>setIsLogin(true)}>Login</button>
                </div>
            )
        }
    </div>
  )
}

export default ConditionalRendering