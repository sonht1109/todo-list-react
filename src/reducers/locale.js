var initState = 'en'

const localeReducer = (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_LOCALE_ACT":
            return action.payload.locale
    
        default:
            return state;
    }
}

export default localeReducer

export const switchLocale = (payload)=> ({
    type: "SWITCH_LOCALE_ACT",
    payload
})