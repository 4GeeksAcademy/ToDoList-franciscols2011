import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  const manejoInput = (e) => {
    setNewItem(e.target.value);
  };

  const agregarElemento = (e) => {
    if (e.key === "Enter" && newItem.trim() !== "") {
      setTodos([...todos, newItem]);
      setNewItem("");
    }
  };

  const eliminarElemento = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h1>todos 🎅</h1>
      <input
        type="text"
        placeholder="Agrega una tarea"
        value={newItem}
        onChange={manejoInput}
        onKeyDown={agregarElemento}
      />

      {todos.length > 0
        ? todos.map((todo, index) => (
            <div key={index} className="todo-item">
              {todo}
              <span
                className="eliminar"
                onClick={() => eliminarElemento(index)}
              >
                X
              </span>
            </div>
          ))
        : "No hay tareas, añadir tareas"}
      <div>🌟 {todos.length} item left</div>
    </div>
  );
};

export default Home;
