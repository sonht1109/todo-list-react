import React from 'react'
import TableElement from './TableElement';

export default function Table(props) {

    const mapTasks = props.tasks.map((task, index) => {
        return <TableElement
        onToggleForm={props.onToggleForm}
        task={task}
        key={"task" + index}
        onDelete={props.onDelete}
        />
    })

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <th>
                            <input
                            type="text" placeholder="Quick search ..."
                            style={{width: "100%"}}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mapTasks}
                </tbody>
            </table>
        </div>
    )
}
