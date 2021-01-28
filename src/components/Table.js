import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import TableElement from './TableElement';

export default function Table() {

    const [keyword, setKeyword] = useState("")
    const tasks = useSelector(state => state.tasks)
    const sort = useSelector(state => state.sort)
    const locale = useSelector(state => state.locale)

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
            task={task}
            key={"task" + index}
        />
    })

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>{locale.task_name}</th>
                        <th>{locale.status}</th>
                        <th>{locale.action}</th>
                    </tr>
                    <tr>
                        <th>
                            <input
                                type="text"
                                placeholder={`${locale.quick_search} ...`}
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
