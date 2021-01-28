import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../common/actions'

export default function Form(props) {

    const dispatch = useDispatch()
    const {displayForm, editingTask} = useSelector(state => state.app)

    useEffect(() => {
        if (editingTask.name && editingTask.status) {
            const { name, status, id } = editingTask
            setTask((prev) => ({
                ...prev,
                name, status, id
            }))
        }
        else {
            setTask((prev) => ({
                ...prev,
                name: "",
                status: "incompleted",
                id: ""
            }))
        }
    }, [editingTask])

    const [task, setTask] = useState({
        name: "",
        status: "incompleted",
        id: ""
    })

    const onToggleForm = () => {
        dispatch(actions.toggleForm({
            editingTask: {},
            displayForm: false
        }))
    }

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setTask((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const onSave = () => {
        if (task.name !== "") {
            if(task.id === ""){
                task.id = Date.now().toString()
            }
            dispatch(actions.saveTask(task))
            dispatch(actions.toggleForm({
                editingTask: {},
                displayForm: false
            }))
            setTask((prev) => (
                { ...prev, name: "", status: "incompleted", id: ""}
            ))
        }
        else alert("Name must be filled !")
    }
    
    const onCancel = ()=> {
        setTask((prev) => (
            { ...prev, name: "", status: "incompleted", id: prev.id}
        ))
    }

    return (
        <div>
            <div className={`form ${displayForm ? 'active' : ''}`}>

                <div style={{ display: 'flex', backgroundColor: "#2196f3", color: "white", padding: 10, alignItems: "center" }}>
                    <p style={{ marginRight: "auto" }}>
                        {editingTask.name ? "Edit task" : "Add a new task"}
                    </p>
                    <span
                        onClick={onToggleForm}
                        style={{ cursor: "pointer" }}
                    >
                        x
                    </span>
                </div>
                <div style={{ padding: "10px" }}>

                    <input
                        type="text" placeholder="Task name"
                        onChange={onChange}
                        name="name"
                        value={task.name}
                    />
                    <br />

                    <input
                        type="radio" id="incompleted" name="status"
                        value="incompleted"
                        onChange={onChange}
                        checked={task.status === "incompleted"}
                    />
                    <label htmlFor="incompleted">Incompleted</label><br />

                    <input
                        type="radio" id="completed" name="status"
                        value="completed"
                        onChange={onChange}
                        checked={task.status === "completed"}
                    />
                    <label htmlFor="completed">Completed</label><br />

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                        <button
                            style={{ backgroundColor: "#8bc34a", color: "white" }}
                            onClick={onSave}
                        >
                            Save
                    </button>

                        <button
                            style={{ backgroundColor: "#9e9e9e", color: "white" }}
                            onClick={onCancel}
                        >
                            Cancel
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
