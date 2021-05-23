import {combineReducers} from 'redux';
import authReducer from './authReducer';
import createContactsReducer from './createContactsReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    createContacts: createContactsReducer
})

export default rootReducer;