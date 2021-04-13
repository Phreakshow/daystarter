
import './App.css';
import Form from "./components/Form.js"
import WeatherWidget from "./components/WeatherWidget"
import TaskList from "./components/TaskList"
import React, { useState, useEffect } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] =useState([]);
  const [status,setStatus] = useState("all");

  const filterHandler =() => {
    switch(status){
      case "completed":
        setFilteredTasks(tasks.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTasks(tasks.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };


  useEffect(()=>{
    getLocalTasks();
  },[]);

  useEffect(() =>{
    filterHandler();
    saveLocalTasks();
  }, [tasks, status]);

  const saveLocalTasks = () =>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
};

const getLocalTasks=()=>{
  if(localStorage.getItem("tasks") ===null){
    localStorage.setItem("tasks", JSON.stringify([]))
  }else{
    let taskLocal = JSON.parse(localStorage.getItem("tasks"));
    setTasks(taskLocal);
  }
};



  return (
    <div className="App">
      <header className="App-header">
        <div className="formTasksFlex">
        
        <Form inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks} status={status} setStatus={setStatus}/>
        
        <TaskList tasks={tasks} setTasks={setTasks} inputText={inputText} setInputText={setInputText} filteredTasks={filteredTasks} />
        </div>
        <WeatherWidget />
      </header>
      
    </div>
  );
}

export default App;
