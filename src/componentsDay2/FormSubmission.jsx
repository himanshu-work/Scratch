import React, { useState } from "react";

const FormSubmission = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const[isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState("");
  const handleSubmit=(e)=>{
   e.preventDefault();
   if(name.trim()==='' || email.trim()===''){
    setError("All Fields are required");
    return;
   }
   setError("");
   setIsLoading(true);
   setTimeout(()=>{
       console.log("Submitted",{name,email});
       setSubmitted(true);
       setIsLoading(false);
       setName('');
       setEmail("");
   },1500)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter Name Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p>{error}</p> }
        {
            isLoading ?
            <p>Submitting ...</p> : <button type="submit">Submit</button>
        }

       
      </form>
      {
        submitted && (
            <div>
                <p>Thank You, {name}</p>
                <p>We will contact You at :{email}</p>
            </div>
        )
      }
    </div>
  );
};

export default FormSubmission;
