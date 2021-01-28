import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../common/actions'
import {locales} from '../common/locales'
import { switchLocale } from '../reducers/locale'

export default function Control() {

    const dispatch = useDispatch()
    const locale = useSelector(state => state.locale)

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

    const onSwitchLocale = (e)=> {
        dispatch(switchLocale({
            locale: e.target.value
        }))
    }

    return (
        <div className="control" style={{flexWrap: "wrap"}}>
            <button
            style={{backgroundColor: "#2196f3", color: "white"}}
            onClick={onToggleForm}
            >
                + {locale.add_task}
            </button>
            <select onChange={onSort} name="name">
                <option value={0}>{locale.default_name}</option>
                <option value={1}>A - Z</option>
                <option value={-1}>Z - A</option>
            </select>
            <select onChange={onSort} name="status">
                <option value={0}>{locale.default_status}</option>
                <option value={1}>{locale.completed}</option>
                <option value={-1}>{locale.incompleted}</option>
            </select>
            <select onChange={onSwitchLocale}>
                {locales.map((l, index) => {
                    return(
                        <option value={l.key} key={"locale" + index}>
                            {l.language}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
