import React from 'react'
import Task from "./Task"

function TaskList({tasks, setTasks, filteredTasks}) {
    return (
        <div>
        <h3 className="tasksForTheDay">Tasks for the day</h3>
         <ul className="taskListStyle">
        {filteredTasks.map(task =>(
            <Task 
            tasks={tasks} 
            setTasks={setTasks} 
            text={task.text} 
            key={task.id}
            task={task}
            /> 
        ))}
    </ul>
        </div>
    )
}

export default TaskList
