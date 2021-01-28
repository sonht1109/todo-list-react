import React from 'react'
import { useDispatch } from 'react-redux';
import * as actions from '../common/actions'

export default function TableElement(props) {

    const dispatch = useDispatch()

    const onToggleForm = ()=> {
        dispatch(actions.toggleForm({
            editingTask: props.task,
            displayForm: true
        }))
    }

    const onDelete = ()=> {
        dispatch(actions.deleteTask(props.task.id))
    }

    return (
        <tr>
            <td>{props.task.name}</td>
            <td
            style={{ textAlign: "center", textDecoration: props.task.status === 'completed' ? 'line-through' : 'none' }}>
                {props.task.status}
            </td>
            <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button
                style={{ backgroundColor: "yellow" }}
                onClick={onToggleForm}
                >
                    Edit
                </button>
                <button style={{ backgroundColor: "#795548", color: "white" }}
                onClick={onDelete}>
                    Delete
                </button>
            </td>
        </tr>
    )
}
