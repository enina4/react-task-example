import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskCard({ task, deleteTask }) {

  const value=useContext(TaskContext)
  console.log(value)
  return (
   
     <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete task</button>
    </div>
    
  );
}

export default TaskCard;
