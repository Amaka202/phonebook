const iniState = {}
 
const createContactsReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE CONTACT SUCCESS':
            return {
                ...state,
                createContactData: action.response,
                createContactSuccessTime: action.createContactSuccessTime
            } 
        case 'CREATE CONTACT ERROR':
            return {
                ...state,
                createContactError: action.createContactError
             } 
        case 'ERROR REFRESHING TOKEN':
            return {
                ...state,
                refreshTokenError: action.refreshTokenError
            }
        default:
            return state;
    }
}

export default createContactsReducer;