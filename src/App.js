import { useState} from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
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
  ])

  //on Add click
  const onAddClick = () => {
    setShowAddTask(!showAddTask);
  }

  //add Task
  const addTask = async (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = async (id) => {
    setTasks(
      tasks.filter(tasks=>tasks.id !== id)
    )
  }

  //toggle reminder state of a task
  const toggleTask = async (id) => {
    setTasks(
      tasks.map((task => {
        return task.id === id ? {...task, reminder: !task.reminder} : task;
      }))
    )
  }
    
  return (
    <Router>
      <div className="container">
        <Header 
          title="Task Tracker" 
          onAddClick={onAddClick}
          showAddTask={showAddTask}
        />
        <Route path='/react-todo-app/' exact render={(props)=>(
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {
              tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} toggleTask={toggleTask}/> : 'No task to show'
            }
          </>
        )} />
        
        <Route path='/react-todo-app/about' component={About}/>
        <Route path='/react-todo-app/' exact component={Footer}/>
      </div>
    </Router>
    
  );
}

export default App;
