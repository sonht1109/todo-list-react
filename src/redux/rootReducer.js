import { combineReducers } from "redux";
import tasks from '../reducers/tasks'
import sort from '../reducers/sort'
import app from '../reducers/app'

const rootReducer = combineReducers({
    tasks,
    sort,
    app
})

export default rootReducer