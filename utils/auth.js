const axios = require("axios").default;

module.exports = async (req) => {
    if (!req.headers.authorization) return;
    try {
        const microData = await axios.get("https://micro.alles.cx/api/me", {
            headers: {
                "Authorization": req.headers.authorization
            }
        });
        return microData.data;
    }
    catch(err) {
        return;
    }
}