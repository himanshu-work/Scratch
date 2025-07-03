import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const[email,setEmail]=useState("");
  return (
    <div>
        <h2>What is your name?</h2>
      <input
        type="text"
        placeholder="Enter Name Here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Email Here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Hello,{name || 'stranger'}!</p>
      <p>Your Email: {email|| 'stranger@gmail.com'}</p>
    </div>
  );
};

export default FormHandling;
