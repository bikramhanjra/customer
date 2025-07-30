import React, { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (add) => {
    if(text !== ""){
        setTodoList([...todoList, text]);
        setText("")
    }
  };

  const handleDelete = (index) => {
    const filteredData = todoList.filter((_, i)=> i !== index)
    setTodoList(filteredData)
  }

  return (
    <div style={{ margin: "2rem" }}>
      <input type="text" value={text} onChange={handleText} />
      <ol type="A">
        {todoList.map((item, index) => {
        return <li key={index}>{item} <button onClick={() =>handleDelete(index)}>Delete</button></li>;
        })}
      </ol>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
