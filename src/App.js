import './App.css';
import Control from './components/Control';
import Table from './components/Table';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const [displayForm, setDisplayForm] = useState(false)
  const [editingTask, setEditingTask] = useState({})
  const [tasks, setTasks] = useState([])

  const onSave = (task) => {
    const index = tasks.findIndex(item => item.id === task.id)
    if (index !== -1) {
      setTasks((prev) => {
        prev[index] = { ...task }
        return [...prev]
      })
    }
    else {
      setTasks((prev) => [...prev, task])
    }
  }

  const onDelete = (task) => {
    const index = tasks.findIndex(item => item.id === task.id)
    let tempArray = [...tasks]
    tempArray.splice(index, 1)
    setTasks([...tempArray])
  }

  return (
    <div className="App">
      <Form
        displayForm={displayForm}
        onToggleForm={() => {
          setDisplayForm(false)
          setEditingTask({})
        }}
        editingTask={editingTask}
        onSave={(task) => {
          onSave(task)
          setDisplayForm(false)
        }}
      />

      <div style={{ width: '100%' }}>
        <Control
          onToggleForm={() => {
            setDisplayForm(true)
            setEditingTask({})
          }}
        />
        <Table
          onToggleForm={(task) => {
            setDisplayForm(true)
            setEditingTask(task)
          }}
          tasks={tasks}
          onDelete={onDelete}
        />
      </div>

    </div>
  );
}

export default App;
