import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { GiHornedHelm } from "react-icons/gi";


function App() {
  const [tasks, setTask] = useState([])
  const [input, setInput] = useState()

  //add taks
  const handlesubmit = (e) => {
    e.preventDefault();
    const addtask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false
    }
    setTask([...tasks, addtask])
    setInput('')
  }

  //delete tasks
  const deleteTasks = (id) => {
    let filteredtasks = [...tasks].filter((task) => task.id !== id)
    setTask(filteredtasks)
    console.log('task deleted')
  }

  // toggle completed task 
  const toggleCompleted = (id) => {
    setTask(
      tasks.map(task =>
      (
        task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const date = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  return (
    <div className="app">
      <div className="container">
        <h1><GiHornedHelm />PowerList</h1>

        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{month[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handlesubmit}>
          <div className="form-input">
            <AiOutlinePlus className="icon" />
            <input value={input}
              type="text"
              placeholder="Enter a task"
              onChange={e => setInput(e.target.value)}></input>
          </div>
        </form>
        <div className="">
          {tasks.map(task => (
            <div className={`task-row ${task.completed ? 'completed' : ''}`} key={task.id} onDoubleClick={() => toggleCompleted(task.id)}>
              <p>{task.text}</p>
              <AiOutlineClose onClick={() => deleteTasks(task.id)} className="icon" />
            </div>
          ))}

    
        </div>
        <p className="length">{(tasks<1) ? `You have no tasks`:`Tasks ${tasks.length}`}</p>
      </div>

    </div>
  );
}

export default App;
