import {decryptToken, encryptToken} from '../../components/helperFnxs';
const createContactApiUrl = 'https://we-skillz-phonebook-task.herokuapp.com/api/v1/contacts';
const refreshApiUrl = 'https://we-skillz-phonebook-task.herokuapp.com/api/v1/auth/refresh';
const email = process.env.REACT_APP_EMAIL;
const bearerToken = decryptToken('pbAccessToken');
const refreshToken = decryptToken('pbRefreshToken');

export const createContact = (contactData) => {
    return (dispatch, getState) => {
        fetch(createContactApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${bearerToken}`
            },
            body: JSON.stringify(contactData)
        })
            .then((data) => data.json())
            .then((response) => {
                dispatch({
                    type: 'CREATE CONTACT SUCCESS',
                    createContactSuccessTime: new Date(),
                    response
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'CREATE CONTACT ERROR',
                    createContactError: new Date(),
                    error
                })
            })
    }
}

export const getRefreshToken = (contactData) => {
    return (dispatch, getState) => {
        fetch(refreshApiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${bearerToken}`
            },
            body: JSON.stringify({
                email,
                refreshToken
            })
        })
            .then((data) => data.json())
            .then((response) => {
               encryptToken( response.token.accessToken, 'pbAccessToken')
                encryptToken(response.token.refreshToken, 'pbRefreshToken')
                encryptToken(response.token.expiresIn, 'tokenExpiryDate')
            })
            .then(() => {
                fetch(createContactApiUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${bearerToken}`
                    },
                    body: JSON.stringify(contactData)
                })
                    .then((data) => data.json())
                    .then((response) => {
                        dispatch({
                            type: 'CREATE CONTACT SUCCESS',
                            createContactSuccessTime: new Date(),
                            response
                        })
                    })
            })
            .catch((error) => {
                dispatch({
                    type: 'ERROR REFRESHING TOKEN',
                    refreshTokenError: new Date(),
                    error
                })
            })
    }
}
