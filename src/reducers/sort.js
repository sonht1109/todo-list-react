import * as consts from '../common/consts'

var initState = {
    name: 0,
    status: 0
}

const sortReducer = (state = initState, action) => {
    switch(action.type){
        case consts.SORT_ACT:
            if(action.payload.name){
                return {...state, name: parseInt(action.payload.name)}
            }
            return {...state, status: parseInt(action.payload.status)}
        default:
            return {...state}
    }
}

export default sortReducer