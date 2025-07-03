import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState({ id: null, desc: "" });
  const [todos, setTodos] = useState([]);
  const handleChange=(e)=>{
     setTodo({
        ...todo,
        desc:e.target.value,
     })
  }

  const handleAdd=()=>{
      if(todo.desc.trim()==='') return;

      const newTodo={
        id:Date.now(),
        desc:todo.desc.trim()
      }

      setTodos([...todos,newTodo]);
      setTodo({id:null,desc:""}); // reset input 
  }

  const handleDelete=(id)=>{
     setTodos(todos.filter((item)=> item.id!=id));
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo Here"
        value={todo.desc}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>Add Todo</button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.desc}
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
