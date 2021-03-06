import { useState } from 'react'

function AddTask({ onAdd }) {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text.trim()){
      alert('Please add a task')
      return;
    }
    if(!day.trim()){
      alert('Please add a time and date')
      return;
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form 
      className="add-form"
      onSubmit={onSubmit}>

      <div className="form-control">
        <label htmlFor="task">
          Task
        </label>
        <input 
          id="task"
          type="text" 
          placeholder="Add Task"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="day-time">
          Day & Time
        </label>
        <input 
          id="day-time"
          type="text" 
          placeholder="Add Day & Time"
          value={day}
          onChange={(e)=>setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="reminder">
          Set Reminder
        </label>
        <input 
          id="reminder"
          type="checkbox" 
          checked={reminder}
          onChange={(e)=>setReminder(e.currentTarget.checked)}
        />
      </div>

      <input 
        className="btn btn-block" 
        type="submit" 
        value="Save Task" 
      />

    </form>
  )
}

export default AddTask
