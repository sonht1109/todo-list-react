import React, { useMemo, useState } from 'react'
import TableElement from './TableElement';

export default function Table(props) {

    const [keyword, setKeyword] = useState("")
    const { tasks, sort } = props

    const taskList = useMemo(() => {
        let tempList = [...tasks]
        if (sort.name !== 0) {
            tempList.sort((t1, t2) => {
                if (t1.name > t2.name) {
                    return sort.name
                }
                else return -sort.name
            })
        }
        if (sort.status !== 0) {
            tempList = tempList.filter(t => t.status === (sort.status === 1 ? "completed" : "incompleted"))
        }
        return tempList
    }, [tasks, sort])

    const searchList = taskList.filter((task) => task.name.toLowerCase().includes(keyword.toLowerCase()))

    const mapTasks = searchList.map((task, index) => {
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
                                style={{ width: "100%" }}
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
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
