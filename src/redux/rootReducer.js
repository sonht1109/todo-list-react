import { combineReducers } from "redux";
import tasks from '../reducers/tasks'
import sort from '../reducers/sort'
import app from '../reducers/app'
import locale from '../reducers/locale'

const rootReducer = combineReducers({
    tasks,
    sort,
    app,
    locale
})

export default rootReducer