const axios = require("axios").default;

module.exports = async (req) => {
	if (!req.headers.authorization) return;
	try {
		const authData = await axios.post("https://sessions.alles.cc/", {
			token: req.headers.authorization,
		});
		return authData.data;
	} catch (err) {
		return;
	}
};
