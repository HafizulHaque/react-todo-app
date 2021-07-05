import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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

  //on Add click
  const onAddClick = () => {
    setShowAddTask(!showAddTask);
  }

  //add Task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    console.log('delete', id)  
    setTasks(
      tasks.filter(tasks=>tasks.id !== id)
    )
  }

  //toggle reminder state of a task
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
      <Header 
        title="Task Tracker" 
        onAddClick={onAddClick}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} toggleTask={toggleTask}/> : 'No task to show'
      }
    </div>
  );
}

export default App;
