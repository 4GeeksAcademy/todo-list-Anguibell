import React, { useState } from "react";
import Task from "./Task";

const ToDoList = () => {

    const [newTask, setNewTask] = useState("")

    const [taskList, setTaskList] = useState([])

    return (
        <div className="">
            <input className="w-100 border border-0 py-3 px-5 fs-4" type="text" value={newTask} placeholder="What do you want to do next?" 
            onChange={(event) => setNewTask(event.target.value)} 
            onKeyUp={(event) => {
                if (event.key == "Enter") {
                    setTaskList([newTask, ...taskList])
                    setNewTask("")
                }
                }}/>

            {(taskList.length == 0) && <div className="py-3 px-5 fs-4">No tasks, add a task</div>}
            {taskList.map( (tarea, indice) => <Task task={tarea} key={indice} onRemove={()=>{
                setTaskList(taskList.filter((_tarea, indiceABorrar)=> (indice != indiceABorrar)))
            }} />)}
            <p className="my-0 p-2 text-black-50">{taskList.length} items left</p>
        </div>
    )
}

export default ToDoList;