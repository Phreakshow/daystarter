import React from 'react'


function Form({inputText, setInputText, tasks, setTasks,setStatus}) {
    const inputTextHandler=(e) =>{
        setInputText(e.target.value);
    }

    const submitTaskHandler = (e) =>{
        e.preventDefault();
        setTasks([
            ...tasks,
            {text:inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText('');
    }
   

    const statusHandler=(e) =>{
        setStatus(e.target.value);
      }


    return (
        <div>
        <h1 className="welcomeToDayStarter">Welcome to your Daystarter!</h1>
            <form className="formTasksFlex">
                <div className="textButtonInput">
                    <input className="inputBoxStyle" type="text" value={inputText} onChange={inputTextHandler}></input>
                    <button className="submitButtonStyle" onClick={submitTaskHandler} type="submit">Submit Task</button>
                </div>    
        
            <div className="filterTasksTextStyle">
            <p > Filter Tasks: </p>
          <select className="selectFieldStyle" onChange = {statusHandler} name="tasks">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
          
             </div>
            </form>
        </div>
    )
}

export default Form
