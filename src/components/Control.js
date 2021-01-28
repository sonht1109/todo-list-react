import React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../common/actions'

export default function Control() {

    const dispatch = useDispatch()

    const onToggleForm = ()=> {
        dispatch(actions.toggleForm({
            editingTask: {},
            displayForm: true
        }))
    }

    const onSort = (e)=> {
        let name = e.target.name
        let value = e.target.value
        dispatch(actions.sort({
            [name]: value
        }))
    }

    return (
        <div className="control">
            <button
            style={{backgroundColor: "#2196f3", color: "white"}}
            onClick={onToggleForm}
            >
                + Add a new task
            </button>
            <select onChange={onSort} name="name">
                <option value={0}>Default (Name)</option>
                <option value={1}>A - Z</option>
                <option value={-1}>Z - A</option>
            </select>
            <select onChange={onSort} name="status">
                <option value={0}>Default (Status)</option>
                <option value={1}>Completed</option>
                <option value={-1}>Incompleted</option>
            </select>
        </div>
    )
}
