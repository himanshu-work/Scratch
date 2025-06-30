import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      {count > 0 ? (
        <button onClick={() => setCount(count - 1)}>Decrease </button>
      ) : (
        <></>
      )}
    </div>
  );
};
//hdbhbddf

export default Counter;
