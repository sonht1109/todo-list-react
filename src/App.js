import './App.css';
import Control from './components/Control';
import Table from './components/Table';
import Form from './components/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const [displayForm, setDisplayForm] = useState(false)
  const [editingTask, setEditingTask] = useState({})
  const [tasks, setTasks] = useState([])
  const [sort, setSort] = useState({
    name: 0,
    status: 0
  })

  // const dispatch = useDispatch()
  // const app = useSelector(state => state.app)

  // const onSave = (task) => {
  //   const index = tasks.findIndex(item => item.id === task.id)
  //   if (index !== -1) {
  //     setTasks((prev) => {
  //       prev[index] = { ...task }
  //       return [...prev]
  //     })
  //   }
  //   else {
  //     setTasks((prev) => [...prev, task])
  //   }
  // }

  const onDelete = (task) => {
    const index = tasks.findIndex(item => item.id === task.id)
    let tempArray = [...tasks]
    tempArray.splice(index, 1)
    setTasks([...tempArray])
  }

  const onSort = (name, value)=> {
    setSort((prev) => ({
      ...prev,
      [name]: parseInt(value)
    }))
  }

  return (
    <div className="App">
      <Form
        // displayForm={displayForm}
        // onToggleForm={() => {
        //   setDisplayForm(false)
        //   setEditingTask({})
        // }}
        // editingTask={editingTask}
        // onSave={(task) => {
        //   onSave(task)
        //   setDisplayForm(false)
        // }}
      />

      <div style={{ width: '100%' }}>
        <Control
          // onToggleForm={() => {
          //   setDisplayForm(true)
          //   setEditingTask({})
          // }}
          onSort={onSort}
        />
        <Table
          // onToggleForm={(task) => {
          //   setDisplayForm(true)
          //   setEditingTask(task)
          // }}
          tasks={tasks}
          onDelete={onDelete}
          sort={sort}
        />
      </div>

    </div>
  );
}

export default App;
