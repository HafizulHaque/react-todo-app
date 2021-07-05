import { useState, useEffect} from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

    //fetch task
    const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //on Add click
  const onAddClick = () => {
    setShowAddTask(!showAddTask);
  }

  //add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
    // console.log(task)
    // const id = Math.floor(Math.random()*10000)+1;
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
    setTasks(
      tasks.filter(tasks=>tasks.id !== id)
    )
  }

  //toggle reminder state of a task
  const toggleTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()

    setTasks(
      tasks.map((task => {
        return task.id === id ? data : task;
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
        <Route path='/' exact render={(props)=>(
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {
              tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} toggleTask={toggleTask}/> : 'No task to show'
            }
          </>
        )} />
        
        <Route path='/about' component={About}/>
        <Route path='/' exact component={Footer}/>
      </div>
    </Router>
    
  );
}

export default App;
