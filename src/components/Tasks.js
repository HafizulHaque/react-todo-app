const tasks = [
  {
    id: 1,
    text: 'Doctor\'s Appoinment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting at school',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false
  }
  
  
]

function Tasks() {
  return (
    <>
      {tasks.map((task=>{
        return (<h3 key={task.id}>{task.text}</h3>)
      }))}
    </>
  )
}

export default Tasks