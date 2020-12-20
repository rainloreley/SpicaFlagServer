const axios = require("axios").default;

module.exports = async (req) => {
	if (!req.headers.authorization) return;
	try {
		const authData = await axios.post("https://micro.alles.cx/api/me", {
			token: req.headers.authorization,
		});
		return authData.data;
	} catch (err) {
		return;
	}
};
