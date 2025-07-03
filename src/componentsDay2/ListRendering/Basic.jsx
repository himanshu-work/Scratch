import React from "react";

const Basic = () => {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <div>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Basic;
