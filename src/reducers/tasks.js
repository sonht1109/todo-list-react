import * as consts from '../common/consts'

var initState = []

const tasksReducer = (state = initState, action) => {
    switch(action.type){
        case consts.SAVE_TASK_ACT:
            const task = action.payload
            var index = state.findIndex(item => task.id === item.id)
            if(index === -1){
                state.push(task)
            }
            else{
                state[index] = {...task}
            }
            return [...state]
        
        case consts.DELETE_TASK_ACT:
            const id = action.payload
            var index = state.findIndex(item => item.id === id)
            let tempTasks = [...state]
            tempTasks.splice(index, 1)
            return [...tempTasks]

        default:
            return [...state]
    }
}

export default tasksReducer