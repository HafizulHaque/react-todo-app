import Task from './Task'

function Tasks({tasks, onDelete, toggleTask}) {
  return (
    <>
      {tasks.map((task=>{
        return (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete}
            toggleTask={toggleTask}>
          </Task>
        )
      }))}
    </>
  )
}

export default Tasks
