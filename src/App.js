
import './App.css';
import Form from "./components/Form.js"
import WeatherWidget from "./components/WeatherWidget"
import TaskList from "./components/TaskList"
import React, { useState, useEffect } from "react";
import Moods from "./components/Moods"
import Quotes from "./components/Quotes"
import SpotifyMain from "./components/SpotifyWidget/client/SpotifyMain"



function App() {

  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] =useState([]);
  const [status,setStatus] = useState("all");
  const [mood, setMood] = useState("");
  const [query,setQuery] = useState("");
  const [weather,setWeather] = useState({});
 

  const filterHandler =() => {
    switch(status){
      case "completed":
        setFilteredTasks(tasks.filter(todo => Boolean(todo.completed)));
        break;
      case "uncompleted":
        setFilteredTasks(tasks.filter(todo => !Boolean(todo.completed)));
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
  if(!localStorage.getItem("tasks")){
    localStorage.setItem("tasks", JSON.stringify([]))
  }else{
    let taskLocal = JSON.parse(localStorage.getItem("tasks"));
    setTasks(taskLocal);
  }
};



  const props = { inputText, setInputText, tasks, setTasks, setStatus }


  
  return (
    <div className="App">
      <header className="App-header">
        <div className="formTasksFlex">
        
        <Form {...props} status={status}/>
        
        <TaskList {...props} filteredTasks={filteredTasks}/>
        </div>

        <div>
        <Moods mood={mood} setMood={setMood}/>
        <Quotes />
    
        <SpotifyMain/>
       
        </div>
        
        <WeatherWidget query={query} setQuery={setQuery} weather={weather} setWeather={setWeather}/>
      </header>
      
    </div>
  );
}

export default App;
