import React, { useState } from "react";

const ExampleConditionalRendering = () => {
  const [name, setName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  return (
    <div>
      {isSubmit ? (
        <p>Your name is {name} </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ExampleConditionalRendering;
