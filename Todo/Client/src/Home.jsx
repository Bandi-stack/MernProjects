import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsFillTrashFill,
  BsCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const Home = () => {
  // to display list of todos
  const [todos, setTodos] = useState([]); //todos stored in form of arrays so []
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="home">
      <h2>To Do List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
              ) : (
                <BsCircleFill className="icon" />
              )}

              <p>{todo.task}</p>
            </div>
            <span>
              <BsFillTrashFill
                className="icon"
                onClick={() => handleDelete(todo._id)}
              />
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
