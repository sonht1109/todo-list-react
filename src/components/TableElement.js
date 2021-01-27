import React from 'react'

export default function TableElement(props) {

    const onToggleForm = ()=> {
        props.onToggleForm(props.task)
    }

    const onDelete = ()=> {
        props.onDelete(props.task)
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
