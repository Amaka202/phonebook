 const CryptoJS = require("crypto-js");
 
// encryption secret key, ideally should be an environment variable
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

