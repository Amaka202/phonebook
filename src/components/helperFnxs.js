 const CryptoJS = require("crypto-js");
 
 const secret = process.env.REACT_APP_SECRET_KEY;

// encrypt token
export const encryptToken = (token, tokenType) => {
	if (token != null) {
		let encryptedToken = CryptoJS.AES.encrypt(
			JSON.stringify(token),
			secret
        ).toString();
        localStorage.setItem(tokenType, encryptedToken)
	}
	return null;
};

// decrypt encrypted token
export const decryptToken = (tokenType) => {
    let token = localStorage.getItem(tokenType)
	try {
		if (
			token != null &&
			token !== "null"
		) {
            console.log();
			let bytes = CryptoJS.AES.decrypt(token.toString(), secret);
            let decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
			return JSON.parse(decryptedToken);
        }
		return null;
	} catch (e) {
		return null;
	}
};

export const isTokenExpired = () => {
    let decryptedExpirydate = decryptToken('tokenExpiryDate')
    //to milliseconds
    let currentDate = Date.parse(new Date())
    let tokenExpiryDateInMilliseconds = Date.parse(decryptedExpirydate)
    return currentDate > tokenExpiryDateInMilliseconds;
}

export const logOut = () => {
	localStorage.removeItem('pbAccessToken')
	localStorage.removeItem('pbRefreshToken')
	localStorage.removeItem('tokenExpiryDate')
}

