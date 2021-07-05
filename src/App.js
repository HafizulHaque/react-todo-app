import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'



function App() {

  const [tasks, setTasks] = useState([
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
  ]);

  const deleteTask = (id) => {
    console.log('delete', id)  
    setTasks(
      tasks.filter(tasks=>tasks.id !== id)
    )
  }

  const toggleTask = (id) => {
    console.log('toggle', id)
    setTasks(
      tasks.map((task => {
        return task.id === id ? {...task, reminder: !task.reminder} : task;
      }))
    )
  }
    
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {
        tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} toggleTask={toggleTask}/> : 'No task to show'
      }
    </div>
  );
}

export default App;
