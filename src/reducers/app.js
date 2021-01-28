import * as consts from '../common/consts'

var initState = {
    displayForm: false,
    editingTask: {}
}

const appReducer = (state = initState, action) => {
    switch(action.type){

        case consts.TOGGLE_FORM_ACT:
            let displayForm = action.payload.displayForm
            let editingTask = {...action.payload.editingTask}
            return {...state, displayForm, editingTask}

        default: 
            return {...state}
    }
}

export default appReducer