const loginApiUrl = 'https://we-skillz-phonebook-task.herokuapp.com/api/v1/auth/login';

export const loginUser = (userData) => {
    return (dispatch, getState) => {
        fetch(loginApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'LOGIN USER SUCCESS',
                    loginSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'LOGIN USER ERROR',
                    loginErrorTime: new Date(),
                    error
                })
            })
    }
}

export const logOut = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOG OUT USER',
        })
    }
}
