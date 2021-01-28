import en from '../locales/en.json'
import vi from '../locales/vi.json'

const locales = {
    en, vi
}

var initState = {...locales['en']}

const localeReducer = (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_LOCALE_ACT":
            const {locale} = action.payload
            return {...locales[locale]}
    
        default:
            return {...state};
    }
}

export default localeReducer

export const switchLocale = (payload)=> ({
    type: "SWITCH_LOCALE_ACT",
    payload
})