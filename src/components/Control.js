import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import * as actions from '../common/actions'
import {locales} from '../common/locales'
import { switchLocale } from '../reducers/locale'
import translateMessages from '../common/translateMessage';

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
                + <FormattedMessage {...translateMessages.addTask} />
            </button>
            <select onChange={onSort} name="name">
                <FormattedMessage id="app.default_name">
                    {message => <option value={0}>{message}</option>}
                </FormattedMessage>
                <option value={1}>A - Z</option>
                <option value={-1}>Z - A</option>
            </select>
            <select onChange={onSort} name="status">
                <FormattedMessage id="app.default_status">
                    {mess => <option value={0}>{mess}</option>}
                </FormattedMessage>
                <FormattedMessage id="app.completed">
                    {mess => <option value={1}>{mess}</option>}
                </FormattedMessage>
                <FormattedMessage id="app.incompleted">
                    {mess => <option value={-1}>{mess}</option>}
                </FormattedMessage>
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
