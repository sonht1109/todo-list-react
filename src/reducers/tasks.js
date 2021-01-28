import * as consts from '../common/consts'

var initState = []

const tasksReducer = (state = initState, action) => {
    switch(action.type){
        case consts.SAVE_TASK_ACT:
            const {id} = action.payload
            const index = state.findIndex(item => id === item.id)
            if(index === -1){
                state.push(task)
            }
            else{
                state[index] = {...task}
            }
            return [...state]

        default:
            return [...state]
    }
}

export default tasksReducer