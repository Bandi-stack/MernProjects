import React, { useState } from "react";
import axios from "axios";
const Create = () => {
  const [tasks, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: tasks })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter the task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
