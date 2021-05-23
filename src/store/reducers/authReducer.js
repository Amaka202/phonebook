const initialState = {}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
         case 'LOGIN USER SUCCESS':
            return {
                ...state,
                data: action.response,
                authStatus: 'success',
                loginSuccessTime: action.loginSuccessTime
            }
        case 'LOGIN USER ERROR':
            return {
                ...state,
                authStatus: 'error',
                loginErrorTime: action.loginErrorTime
             }
        case 'LOG OUT USER':
            localStorage.removeItem('pbAccessToken')
            localStorage.removeItem('pbRefreshToken')
            localStorage.removeItem('tokenExpiryDate')
            return initialState;    
         
        default:
            return state;
    }
}

export default authReducer;