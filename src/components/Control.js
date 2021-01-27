import React from 'react'

export default function Control(props) {

    const onToggleForm = ()=> {
        props.onToggleForm()
    }

    return (
        <div className="control">
            <button
            style={{backgroundColor: "#2196f3", color: "white"}}
            onClick={onToggleForm}
            >
                + Add a new task
            </button>
            <select>
                <option value="0">Default (Name)</option>
                <option value="1">A - Z</option>
                <option value="-1">Z - A</option>
            </select>
            <select>
                <option value="0">Default (Status)</option>
                <option value="1">Completed</option>
                <option value="-1">Incompleted</option>
            </select>
        </div>
    )
}
