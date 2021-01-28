import * as consts from '../common/consts'

export const toggleForm = (payload)=> ({
    type: consts.TOGGLE_FORM_ACT,
    payload
})

export const deleteTask = (payload) => ({
    type: consts.DELETE_TASK_ACT,
    payload
})

export const sort = (payload) => ({
    type: consts.SORT_ACT,
    payload
})

export const saveTask = (payload) => ({
    type: consts.SAVE_TASK_ACT,
    payload
})