 const CryptoJS = require("crypto-js");
 
// encryption secret key, ideally should be an environment variable
 const secret = "secret";

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
    localStorage.getItem(tokenType)
	try {
		if (
			tokenType != null &&
			tokenType !== "null"
		) {
			let bytes = CryptoJS.AES.decrypt(tokenType.toString(), secret);
			let decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
			return JSON.parse(decryptedToken);
		}
		return null;
	} catch (e) {
		return null;
	}
};

