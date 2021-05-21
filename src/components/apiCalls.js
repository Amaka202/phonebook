import {decryptToken} from './helperFnxs';
import {encryptToken} from './helperFnxs';
let email = process.env.REACT_APP_EMAIL;
let bearerToken = decryptToken('pbAccessToken');
let refreshToken = decryptToken('pbRefreshToken');

export const loginFnx = async (data, setMessage) => {
  try{
    let response = await fetch('https://we-skillz-phonebook-task.herokuapp.com/api/v1/auth/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        let loginData = await response.json()
        return loginData;
  }catch(e){
    setMessage('Error Loging in')
    setTimeout(() => setMessage(''), 3000)          

  }
}
export const createContact = (data, reset, setShowContactForm, setMessage) => {
          fetch('https://we-skillz-phonebook-task.herokuapp.com/api/v1/contacts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                 if(!data.code){
                  reset()
                  setShowContactForm(false)
                }else{
                    setMessage('Fill all required fields')  
                    setTimeout(() => setMessage(''), 3000)          
                }
            })
            .catch((error) => {
                setMessage('Error Creating contact')
                setTimeout(() => setMessage(''), 3000)
            });
}

  export const getNewToken = async (setMessage) => {
          try{
            let response = await fetch('https://we-skillz-phonebook-task.herokuapp.com/api/v1/auth/refresh', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${bearerToken}`,
              },
              body: JSON.stringify({
                email,
                refreshToken
              })
            })
            let data = await response.json()
                encryptToken( data.token.accessToken, 'pbAccessToken')
                encryptToken(data.token.refreshToken, 'pbRefreshToken')
                encryptToken(data.token.expiresIn, 'tokenExpiryDate')
          }catch(e){
            console.log(e);
            setMessage('Error Creating contact')
            setTimeout(() => setMessage(''), 3000)
          }
}
