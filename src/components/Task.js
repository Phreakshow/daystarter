import React from 'react'
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

function Task({text,task, tasks, setTasks, filteredTasks}) {
    const deleteHandler=()=>{
        setTasks(tasks.filter(element =>element.id !== task.id));
     };
 
     const completeHandler =() =>{
         setTasks(tasks.map((item)=>{
             if(item.id ===task.id){
                 return {
                     ...item, 
                     completed: !item.completed,
                 };
             }
             return item;
         })
         );
     };




    return (
        <div className="taskContainer">
            <li className={`${task.completed ? "taskFlexBoxCompleted" : "taskFlexBox"}`}   >{text}</li>
            <div className="taskButtons">
            <button className="taskButtonComplete" onClick={completeHandler} >
            <AiFillCheckCircle />
            COMPLETE
            </button>
            
            <button className="taskButtonDelete" onClick ={deleteHandler}>
            <AiFillDelete />
            DELETE
            </button>
            </div>
        </div>
    )
}

export default Task
