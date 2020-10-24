const db = require("../db");

module.exports = async (req, res) => {
    if (typeof req.params.id !== "string") return res.status(400).json({ err: "badRequest" });

    const user = await db.User.findOne({
        where: {
            uid: req.params.id
        }
    });
    if (!user) return res.status(404).json({err: "missingResource"});

    res.send(user);
}